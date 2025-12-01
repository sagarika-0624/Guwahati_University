import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, FileText, Upload, CreditCard, CheckCircle, Clock,
  ArrowRight, ArrowLeft, AlertCircle, Download, Eye, Trash2,
  Camera, Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const steps = [
  { id: 1, name: 'Personal Details', icon: User },
  { id: 2, name: 'Academic Info', icon: FileText },
  { id: 3, name: 'Documents', icon: Upload },
  { id: 4, name: 'Payment', icon: CreditCard },
  { id: 5, name: 'Review', icon: CheckCircle }
];

const programs = [
  { value: 'bsc-cs', label: 'B.Sc. Computer Science' },
  { value: 'bsc-physics', label: 'B.Sc. Physics' },
  { value: 'ba-english', label: 'B.A. English' },
  { value: 'bcom', label: 'B.Com' },
  { value: 'msc-cs', label: 'M.Sc. Computer Science' },
  { value: 'ma-english', label: 'M.A. English' }
];

export default function AdmissionPortal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    program: '',
    board: '',
    percentage: '',
    passingYear: ''
  });

  const [uploadedDocs, setUploadedDocs] = useState<Record<string, boolean>>({});
  const [activeUploadDoc, setActiveUploadDoc] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Payment & Submission State
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'completed'>('pending');
  const [timer, setTimer] = useState(120); // 2 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (paymentMethod && paymentStatus === 'processing' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [paymentMethod, paymentStatus, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePaymentSelect = (method: string) => {
    setPaymentMethod(method);
    setPaymentStatus('processing');
    setTimer(120);
  };

  const simulatePaymentSuccess = () => {
    setPaymentStatus('completed');
    setTimer(0);
  };

  const handleSubmit = () => {
    // Simulate API call
    const randomId = 'GU-' + Math.floor(Math.random() * 1000000);
    setApplicationId(randomId);
    setIsSubmitted(true);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && activeUploadDoc) {
      // Simulate upload success
      setTimeout(() => {
        setUploadedDocs(prev => ({ ...prev, [activeUploadDoc]: true }));
        setActiveUploadDoc(null);
      }, 1000);
    }
  };

  const triggerFileUpload = (type: 'camera' | 'file') => {
    if (fileInputRef.current) {
      if (type === 'camera') {
        fileInputRef.current.setAttribute('capture', 'environment');
      } else {
        fileInputRef.current.removeAttribute('capture');
      }
      fileInputRef.current.click();
    }
  };

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Admission Application</h1>
          <p className="text-red-100">Academic Session 2025-26</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isCompleted
                        ? 'bg-emerald-500 text-white'
                        : isCurrent
                          ? 'bg-red-700 text-white'
                          : 'bg-gray-200 text-black'
                        }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 ${isCurrent ? 'text-red-700 font-medium' : 'text-black'
                        }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 md:w-24 h-1 mx-2 ${isCompleted ? 'bg-emerald-500' : 'bg-gray-200'
                        }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black">
              {React.createElement(steps[currentStep - 1].icon, { className: 'w-5 h-5 text-red-700' })}
              {steps[currentStep - 1].name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Enter last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Academic Info */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="program">Select Program *</Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((prog) => (
                        <SelectItem key={prog.value} value={prog.value}>
                          {prog.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="board">Board/University *</Label>
                    <Input
                      id="board"
                      value={formData.board}
                      onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                      placeholder="e.g., AHSEC, CBSE"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="percentage">Percentage/CGPA *</Label>
                    <Input
                      id="percentage"
                      value={formData.percentage}
                      onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                      placeholder="e.g., 75% or 8.5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passingYear">Year of Passing *</Label>
                    <Input
                      id="passingYear"
                      value={formData.passingYear}
                      onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
                      placeholder="e.g., 2024"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Documents */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*,application/pdf"
                  onChange={handleFileSelect}
                />

                {[
                  { name: 'Photograph', desc: 'Passport size, white background' },
                  { name: 'Signature', desc: 'Blue/Black ink on white paper' },
                  { name: '10th Marksheet', desc: 'PDF format, max 2MB' },
                  { name: '12th Marksheet', desc: 'PDF format, max 2MB' },
                  { name: 'ID Proof', desc: 'Aadhaar/PAN/Passport' }
                ].map((doc, index) => (
                  <div
                    key={doc.name}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg transition-colors ${uploadedDocs[doc.name]
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-dashed hover:border-red-300'
                      }`}
                  >
                    <div>
                      <p className="font-medium text-black">{doc.name}</p>
                      <p className="text-sm text-black">{doc.desc}</p>
                    </div>
                    {uploadedDocs[doc.name] ? (
                      <div className="flex items-center gap-2 text-emerald-700">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Uploaded</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => setUploadedDocs(prev => ({ ...prev, [doc.name]: false }))}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => setActiveUploadDoc(doc.name)}
                      >
                        <Upload className="w-4 h-4" />
                        Upload
                      </Button>
                    )}
                  </div>
                ))}

                {/* Upload Options Modal */}
                {activeUploadDoc && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden"
                    >
                      <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="font-semibold text-black">Upload {activeUploadDoc}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setActiveUploadDoc(null)}
                        >
                          ✕
                        </Button>
                      </div>
                      <div className="p-4 grid grid-cols-2 gap-4">
                        <button
                          onClick={() => triggerFileUpload('camera')}
                          className="flex flex-col items-center gap-3 p-6 border-2 border-dashed rounded-xl hover:bg-gray-50 hover:border-red-500 transition-all group"
                        >
                          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                            <Camera className="w-6 h-6 text-red-600" />
                          </div>
                          <span className="font-medium text-black">Camera</span>
                        </button>
                        <button
                          onClick={() => triggerFileUpload('file')}
                          className="flex flex-col items-center gap-3 p-6 border-2 border-dashed rounded-xl hover:bg-gray-50 hover:border-red-500 transition-all group"
                        >
                          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <ImageIcon className="w-6 h-6 text-blue-600" />
                          </div>
                          <span className="font-medium text-black">Files</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold mb-4 text-black">Application Fee Summary</h3>
                  <div className="space-y-3 text-black">
                    <div className="flex justify-between">
                      <span>Application Fee</span>
                      <span>₹500.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee</span>
                      <span>₹50.00</span>
                    </div>
                    <div className="flex justify-between font-bold pt-3 border-t border-gray-200">
                      <span>Total Amount</span>
                      <span className="text-red-700">₹550.00</span>
                    </div>
                  </div>
                </div>

                {!paymentMethod ? (
                  <div className="space-y-4">
                    <Label className="text-black">Select Payment Method</Label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {['UPI', 'Net Banking', 'Card'].map((method) => (
                        <div
                          key={method}
                          onClick={() => handlePaymentSelect(method)}
                          className="p-4 border-2 rounded-lg cursor-pointer hover:border-red-500 transition-colors text-center bg-white hover:bg-red-50"
                        >
                          <p className="font-medium text-black">{method}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border-2 border-red-100 rounded-xl p-6 space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <h3 className="font-semibold text-black">Paying via {paymentMethod}</h3>
                      {paymentStatus === 'processing' && (
                        <div className="flex items-center gap-2 text-red-600 font-mono font-bold bg-red-50 px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4" />
                          {formatTime(timer)}
                        </div>
                      )}
                    </div>

                    {paymentStatus === 'completed' ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-bold text-black mb-2">Payment Successful!</h4>
                        <p className="text-black">Transaction ID: TXN-{Math.floor(Math.random() * 10000000)}</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {paymentMethod === 'UPI' && (
                          <div className="text-center space-y-4">
                            <div className="bg-white p-4 inline-block rounded-xl border-2 border-gray-200">
                              {/* Dummy QR Code */}
                              <div className="w-48 h-48 bg-gray-900 flex items-center justify-center text-white text-xs">
                                <img
                                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=guwahatiuniversity@sbi&pn=GuwahatiUniversity&am=550.00&cu=INR"
                                  alt="Payment QR"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                            <p className="text-sm text-black">Scan this QR code with any UPI app to pay</p>
                          </div>
                        )}

                        {paymentMethod === 'Net Banking' && (
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                              <p className="text-blue-800 font-medium mb-2">Redirecting to Bank Gateway...</p>
                              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                            </div>
                            <p className="text-center text-sm text-black">Please do not refresh or close this page.</p>
                          </div>
                        )}

                        {paymentMethod === 'Card' && (
                          <div className="space-y-4 max-w-sm mx-auto">
                            <div className="space-y-2">
                              <Label className="text-black">Card Number</Label>
                              <Input placeholder="XXXX XXXX XXXX XXXX" className="text-black" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-black">Expiry</Label>
                                <Input placeholder="MM/YY" className="text-black" />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-black">CVV</Label>
                                <Input placeholder="123" type="password" className="text-black" />
                              </div>
                            </div>
                          </div>
                        )}

                        <Button
                          className="w-full bg-red-700 hover:bg-red-800 text-white py-6 text-lg"
                          onClick={simulatePaymentSuccess}
                        >
                          {paymentMethod === 'UPI' ? 'I have made the payment' : `Pay ₹550.00`}
                        </Button>

                        <button
                          onClick={() => { setPaymentMethod(null); setPaymentStatus('pending'); }}
                          className="w-full text-sm text-black hover:text-black underline"
                        >
                          Cancel and choose another method
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                    <div>
                      <h3 className="font-bold text-emerald-800">Application Ready</h3>
                      <p className="text-sm text-emerald-600">Please review your details before submission</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-black">Personal Information</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-black">Name:</span>
                      <span className="ml-2 font-medium text-black">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div>
                      <span className="text-black">Email:</span>
                      <span className="ml-2 font-medium text-black">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-black">Phone:</span>
                      <span className="ml-2 font-medium text-black">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-black">Program:</span>
                      <span className="ml-2 font-medium text-black">{programs.find(p => p.value === formData.program)?.label || '-'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1 || isSubmitted}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < steps.length ? (
                <Button
                  onClick={handleNext}
                  disabled={currentStep === 4 && paymentStatus !== 'completed'}
                  className="bg-red-700 hover:bg-red-800 gap-2"
                >
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className="bg-emerald-600 hover:bg-emerald-700 gap-2"
                >
                  {isSubmitted ? 'Submitted' : 'Submit Application'}
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div >

      {/* Success Modal */}
      {
        isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden text-center p-8"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Application Submitted!</h2>
              <p className="text-black mb-6">
                Your application has been successfully submitted. Your Application ID is:
              </p>
              <div className="bg-gray-100 p-4 rounded-xl mb-8">
                <span className="text-2xl font-mono font-bold text-black">{applicationId}</span>
              </div>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-red-700 hover:bg-red-800" onClick={() => window.location.href = '/'}>
                  Return to Home
                </Button>
                <Button variant="outline" className="w-full" onClick={() => window.print()}>
                  Download Receipt
                </Button>
              </div>
            </motion.div>
          </div>
        )
      }
    </div >
  );
}
