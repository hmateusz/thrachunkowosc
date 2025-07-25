<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';
  
  // Simple text icons
  const icons: Record<string, string> = {
    Mail: '✉️',
    Phone: '📞',
    MapPin: '📍',
    Clock: '⏰'
  };
  
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitMessage = '';
  
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      submitMessage = 'Thank you for your message! We\'ll get back to you within 24 hours.';
      formData = { name: '', email: '', phone: '', subject: '', message: '' };
    }, 1000);
  };
  
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@taxpro.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'MapPin',
      title: 'Office',
      value: '123 Business St, Suite 100',
      description: 'City, State 12345'
    },
    {
      icon: 'Clock',
      title: 'Hours',
      value: 'Mon-Fri: 9AM-6PM',
      description: 'Weekends by appointment'
    }
  ];
  
  const subjects = [
    'General Inquiry',
    'Tax Preparation',
    'Tax Planning',
    'Business Services',
    'Audit Support',
    'Other'
  ];
</script>

<svelte:head>
  <title>Contact Us - TaxPro Professional Tax Advisory</title>
  <meta name="description" content="Contact TaxPro for professional tax advisory services. Schedule a consultation or get answers to your tax questions. Phone, email, and office hours." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary-800">
        Contact Us
      </h1>
      <p class="text-lg text-primary-600">
        Ready to take control of your taxes? Get in touch with our team of experts. We're here to help you navigate your tax challenges and opportunities.
      </p>
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <Card variant="bordered" class="h-full">
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl font-bold text-primary-800 mb-2">Send us a Message</h2>
              <p class="text-primary-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            {#if submitMessage}
              <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p class="text-green-800">{submitMessage}</p>
              </div>
            {/if}
            
            <form on:submit={handleSubmit} class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-primary-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    bind:value={formData.name}
                    required
                    class="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-primary-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    bind:value={formData.email}
                    required
                    class="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="phone" class="block text-sm font-medium text-primary-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    bind:value={formData.phone}
                    class="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-primary-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    bind:value={formData.subject}
                    required
                    class="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {#each subjects as subject}
                      <option value={subject}>{subject}</option>
                    {/each}
                  </select>
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-primary-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  bind:value={formData.message}
                  required
                  rows="5"
                  class="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your tax needs or questions..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                size="lg"
                class="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </Card>
      </div>
      
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-primary-800 mb-6">Get in Touch</h2>
          <div class="space-y-6">
            {#each contactInfo as info}
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">{icons[info.icon]}</span>
                </div>
                <div>
                  <h3 class="font-semibold text-primary-800">{info.title}</h3>
                  <p class="text-primary-700 font-medium">{info.value}</p>
                  <p class="text-primary-600 text-sm">{info.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Office Map Placeholder -->
        <Card variant="bordered">
          <div class="aspect-video bg-primary-50 rounded-lg flex items-center justify-center">
            <div class="text-center space-y-2">
              <span class="text-4xl">{icons.MapPin}</span>
              <p class="text-primary-600 font-medium">Interactive Map</p>
              <p class="text-primary-500 text-sm">Visit us at our downtown office</p>
            </div>
          </div>
        </Card>
        
        <!-- Quick Actions -->
        <Card variant="elevated">
          <div class="space-y-4">
            <h3 class="font-semibold text-primary-800">Need immediate assistance?</h3>
            <div class="space-y-3">
              <Button variant="outline" class="w-full justify-start" href="tel:+15551234567">
                <span class="mr-2">{icons.Phone}</span>
                Call Now: (555) 123-4567
              </Button>
              <Button variant="outline" class="w-full justify-start" href="mailto:info@taxpro.com">
                <span class="mr-2">{icons.Mail}</span>
                Email: info@taxpro.com
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="section-padding bg-primary-50">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Frequently Asked Questions
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        Have questions? Here are some answers to common inquiries about our services.
      </p>
    </div>
    
    <div class="max-w-3xl mx-auto space-y-6">
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">How quickly can you prepare my tax return?</h3>
          <p class="text-primary-600">
            Most individual returns are completed within 3-5 business days. Business returns typically take 5-7 business days. Rush service is available for an additional fee.
          </p>
        </div>
      </Card>
      
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">Do you offer virtual consultations?</h3>
          <p class="text-primary-600">
            Yes! We offer secure video consultations for your convenience. All of our services can be completed remotely with secure document sharing.
          </p>
        </div>
      </Card>
      
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">What documents do I need to bring?</h3>
          <p class="text-primary-600">
            We'll provide you with a comprehensive checklist based on your specific situation. Generally, you'll need W-2s, 1099s, receipts for deductions, and prior year returns.
          </p>
        </div>
      </Card>
    </div>
  </div>
</section> 