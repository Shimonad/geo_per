import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { Mail, Calendar, MapPin, Linkedin, Phone, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/shimonadubey2509/30min', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-[#202124] leading-tight">
              Let's{" "}
              <span className="text-[#1a73e8] font-medium">Connect</span>
            </h1>
            <p className="text-xl text-[#5f6368] leading-relaxed font-light">
              Ready to discuss how I can contribute to Google's geo-location platform team?
              Let's schedule a conversation about opportunities and mutual fit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-[#e8eaed]">
                <CardHeader className="bg-[#f8f9fa] border-b border-[#e8eaed]">
                  <CardTitle className="text-xl font-medium text-[#202124] flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-[#1a73e8]" />
                    <span>Send a Message</span>
                  </CardTitle>
                  <p className="text-sm text-[#5f6368] mt-2">
                    I'd love to hear about potential opportunities at Google and how my experience aligns with your team's needs.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#202124] mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="border-[#dadce0] focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#202124] mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@google.com"
                          className="border-[#dadce0] focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#202124] mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Google"
                          className="border-[#dadce0] focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-[#202124] mb-2">
                          Your Role
                        </label>
                        <Input
                          id="role"
                          name="role"
                          type="text"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Hiring Manager, Recruiter, etc."
                          className="border-[#dadce0] focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#202124] mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="I'd like to discuss the Google Geo TPM opportunity and how your experience in technical product management and data integration aligns with our team's needs..."
                        className="border-[#dadce0] focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#1a73e8] hover:bg-[#1557b1] text-white py-3 text-base font-medium"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Quick Actions */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-lg border-[#e8eaed]">
                <CardHeader className="bg-[#f8f9fa] border-b border-[#e8eaed]">
                  <CardTitle className="text-lg font-medium text-[#202124]">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#1a73e8]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#202124] text-sm">Email</p>
                      <a 
                        href="mailto:shimonadubey2509@gmail.com"
                        className="text-[#1a73e8] hover:underline text-sm"
                      >
                        shimonadubey2509@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#1a73e8]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#202124] text-sm">Location</p>
                      <p className="text-[#5f6368] text-sm">Boston, MA (Open to Relocation)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-[#1a73e8]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#202124] text-sm">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/shimona-dubey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a73e8] hover:underline text-sm"
                      >
                        linkedin.com/in/shimona-dubey
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Meeting */}
              <Card className="shadow-lg border-[#e8eaed]">
                <CardHeader className="bg-[#f8f9fa] border-b border-[#e8eaed]">
                  <CardTitle className="text-lg font-medium text-[#202124]">
                    Schedule a Meeting
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#5f6368] mb-6 text-sm leading-relaxed">
                    Prefer a direct conversation? Schedule a 30-minute call to discuss 
                    the Google Geo TPM opportunity and how my experience aligns with your team's needs.
                  </p>
                  
                  <Button 
                    onClick={handleCalendlyClick}
                    variant="outline"
                    className="w-full border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white py-3 text-base font-medium"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a 30-min Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#202124] mb-6">
            Ready to discuss the{" "}
            <span className="text-[#1a73e8] font-medium">Google Geo TPM</span>{" "}
            opportunity?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCalendlyClick}
              size="lg"
              className="bg-[#1a73e8] hover:bg-[#1557b1] text-white px-8 py-3 text-base font-medium"
            >
              Schedule Interview
            </Button>
            <a href="/Shimona_Dubey_TPM.pdf" download>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#dadce0] text-[#1a73e8] hover:bg-[#f8f9fa] hover:border-[#1a73e8] px-8 py-3 text-base font-medium"
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;