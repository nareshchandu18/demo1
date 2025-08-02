import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Brain, 
  Clock, 
  Target, 
  Zap, 
  Trophy, 
  RefreshCw,
  CheckCircle,
  XCircle,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  explanation: string;
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  xpEarned: number;
  timeSpent: number;
  weakAreas: string[];
  skillHeatmap: { [key: string]: number };
}

const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correctAnswer: 1,
    difficulty: 'Medium',
    topic: 'Data Structures & Algorithms',
    explanation: 'Binary search divides the search space in half each iteration, resulting in O(log n) complexity.'
  },
  {
    id: '2',
    question: 'Which React hook is used for managing component state?',
    options: ['useEffect', 'useState', 'useContext', 'useMemo'],
    correctAnswer: 1,
    difficulty: 'Easy',
    topic: 'React Fundamentals',
    explanation: 'useState is the primary hook for managing local component state in React functional components.'
  },
  {
    id: '3',
    question: 'What does SQL stand for?',
    options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'Sequential Query Language'],
    correctAnswer: 0,
    difficulty: 'Easy',
    topic: 'Database Fundamentals',
    explanation: 'SQL stands for Structured Query Language, used for managing relational databases.'
  },
  {
    id: '4',
    question: 'Which HTTP status code indicates a successful request?',
    options: ['404', '500', '200', '301'],
    correctAnswer: 2,
    difficulty: 'Medium',
    topic: 'Web Development',
    explanation: 'HTTP status code 200 indicates that the request was successful.'
  },
  {
    id: '5',
    question: 'What is the main purpose of Docker?',
    options: ['Version control', 'Containerization', 'Database management', 'Code compilation'],
    correctAnswer: 1,
    difficulty: 'Hard',
    topic: 'DevOps',
    explanation: 'Docker is primarily used for containerization, allowing applications to run in isolated environments.'
  }
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | 'Adaptive'>('Adaptive');
  const { toast } = useToast();

  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / sampleQuestions.length) * 100;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      handleQuizComplete();
    }
    return () => clearTimeout(timer);
  }, [quizStarted, quizCompleted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(300);
    toast({
      title: "Quiz Started! 🚀",
      description: "Good luck! Answer carefully for maximum XP.",
    });
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) {
      toast({
        title: "Select an answer",
        description: "Please choose an option before submitting.",
        variant: "destructive"
      });
      return;
    }

    const answerIndex = parseInt(selectedAnswer);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setAnswers([...answers, answerIndex]);
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct! ✅",
        description: "+20 XP earned!",
      });
    } else {
      toast({
        title: "Incorrect ❌",
        description: `Correct answer: ${currentQuestion.options[currentQuestion.correctAnswer]}`,
        variant: "destructive"
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < sampleQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
      } else {
        handleQuizComplete();
      }
    }, 1500);
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setShowResult(true);
    
    const finalScore = score + (selectedAnswer && parseInt(selectedAnswer) === currentQuestion?.correctAnswer ? 1 : 0);
    const xpEarned = finalScore * 20 + (timeLeft > 0 ? 50 : 0); // Bonus for time remaining
    
    toast({
      title: "Quiz Complete! 🎉",
      description: `You earned ${xpEarned} XP! Great job!`,
    });
  };

  const retakeQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setShowResult(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setAnswers([]);
    setScore(0);
    setTimeLeft(300);
  };

  const getSkillHeatmap = (): { [key: string]: number } => {
    const topics: { [key: string]: { correct: number; total: number } } = {};
    
    sampleQuestions.forEach((q, index) => {
      if (!topics[q.topic]) {
        topics[q.topic] = { correct: 0, total: 0 };
      }
      topics[q.topic].total++;
      if (answers[index] === q.correctAnswer) {
        topics[q.topic].correct++;
      }
    });

    const heatmap: { [key: string]: number } = {};
    Object.keys(topics).forEach(topic => {
      heatmap[topic] = Math.round((topics[topic].correct / topics[topic].total) * 100);
    });

    return heatmap;
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen p-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center justify-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-primary" />
              Quiz Center
            </h1>
            <p className="text-muted-foreground text-lg">Test your skills with AI-powered adaptive quizzes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="glass-card hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Quiz Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Questions:</span>
                  <Badge variant="secondary">{sampleQuestions.length}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Time Limit:</span>
                  <Badge variant="secondary">5 minutes</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <Badge className="bg-gradient-primary text-primary-foreground">Adaptive</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">XP Reward:</span>
                  <Badge variant="outline" className="text-primary">Up to 150 XP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quiz Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Answer all questions to complete</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Instant feedback after each answer</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Bonus XP for time remaining</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Skill analysis after completion</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={startQuiz}
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-6 text-lg h-auto animate-pulse"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Start Quiz Challenge
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              Question {currentQuestionIndex + 1} of {sampleQuestions.length}
            </h1>
            <Badge variant="outline" className="mt-1">
              {currentQuestion?.difficulty}
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="glass-card mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{currentQuestion?.topic}</Badge>
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < (currentQuestion?.difficulty === 'Easy' ? 1 : currentQuestion?.difficulty === 'Medium' ? 2 : 3)
                        ? 'text-yellow-400 fill-current' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                ))}
              </div>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion?.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              <div className="space-y-3">
                {currentQuestion?.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer hover:text-primary transition-colors p-3 rounded-lg hover:bg-accent/50"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-muted-foreground">
                Score: {score}/{currentQuestionIndex + 1}
              </div>
              <Button 
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer}
                className="bg-gradient-primary hover:bg-gradient-primary/90"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Submit Answer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Modal */}
      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Trophy className="w-6 h-6 text-primary" />
              Quiz Complete!
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Score Overview */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{score}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{score * 20}+</div>
                <div className="text-sm text-muted-foreground">XP Earned</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{Math.round((score/sampleQuestions.length)*100)}%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </Card>
            </div>

            {/* Skill Heatmap */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Skill Performance
              </h3>
              <div className="space-y-2">
                {Object.entries(getSkillHeatmap()).map(([topic, percentage]) => (
                  <div key={topic}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{topic}</span>
                      <span>{percentage}%</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button onClick={retakeQuiz} variant="outline" className="flex-1">
                <RefreshCw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
              <Button onClick={() => setShowResult(false)} className="flex-1">
                <Award className="w-4 h-4 mr-2" />
                Continue Learning
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}