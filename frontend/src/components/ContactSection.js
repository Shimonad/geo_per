import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "../hooks/use-toast";
import { Mail, Calendar, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleCalendlyClick = () => {
    // Mock Calendly integration
    toast({
      title: "Calendly Integration",
      description: "This would open Calendly booking widget in a real implementation.",
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss how I can contribute to Google's geo-location platform team?
            Let's schedule a conversation about opportunities and mutual fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-6">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Miracle"
                      className="border-gray-300 focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="border-gray-300 focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Google (optional)"
                    className="border-gray-300 focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="I'd like to discuss about your profile"
                    className="border-gray-300 focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Scheduling */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#1a73e8]" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:shimonadubey2509@gmail.com"
                      className="text-[#1a73e8] hover:underline"
                    >
                      shimonadubey2509@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#1a73e8]" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Boston, MA (Open to Relocation)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-[#1a73e8]" />
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/shimonadubey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a73e8] hover:underline"
                    >
                      linkedin.com/in/shimona-dubey
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scheduling */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Schedule a Meeting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Prefer a direct conversation? Schedule a 30-minute call to discuss 
                  the Google Geo TPM opportunity and how my experience aligns with your team's needs.
                </p>
                
                <Button 
                  onClick={handleCalendlyClick}
                  variant="outline"
                  className="w-full border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white py-3"
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
  );
};

export default ContactSection;