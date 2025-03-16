
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Button from '@/components/common/Button';
import { Layout } from '@/components/layout/Layout';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success('Your message has been sent. We will get back to you soon!');
    form.reset();
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <div className="w-20 h-1 bg-rosegold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Contact us for admissions, program information, or to schedule a campus tour.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-soft text-center">
            <div className="w-12 h-12 bg-rosegold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-rosegold-dark h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-muted-foreground">123 Academy Drive<br />Toronto, ON M5V 2K7<br />Canada</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-soft text-center">
            <div className="w-12 h-12 bg-rosegold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-rosegold-dark h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-muted-foreground">+1 (416) 555-0123<br />Monday-Friday: 9am-5pm<br />Saturday: 10am-2pm</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-soft text-center">
            <div className="w-12 h-12 bg-rosegold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-rosegold-dark h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-muted-foreground">info@canadianmasters.edu<br />admissions@canadianmasters.edu<br />support@canadianmasters.edu</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-gold p-8 rounded-lg">
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold mb-6">Send Us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your message here..."
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5162183259937!2d-79.38634752392055!3d43.6502329564446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb349a68df7d%3A0x7f26b5edce5f0710!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1710852418442!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Academy Location" 
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
