<script lang="ts">
  // Simple text icons instead of lucide icons
  const icons = {
    phone: '📞',
    email: '✉️',
    location: '📍'
  };
  
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const contact = {
    phone: '+1 (555) 123-4567',
    email: 'info@taxpro.com',
    address: '123 Business St, Suite 100, City, State 12345'
  };
</script>

<footer class="bg-primary-50 border-t border-primary-200">
  <div class="container-custom section-padding">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Company Info -->
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">T</span>
          </div>
          <span class="font-bold text-xl text-primary-800">TaxPro</span>
        </div>
        <p class="text-primary-600 max-w-md">
          Professional tax advisory services to help you navigate complex tax regulations and optimize your financial strategy.
        </p>
      </div>
      
      <!-- Navigation -->
      <div>
        <h3 class="font-semibold text-primary-800 mb-4">Quick Links</h3>
        <nav class="space-y-2">
          {#each navigation as item}
            <a
              href={item.href}
              class="block text-primary-600 hover:text-primary-800 transition-colors duration-200"
            >
              {item.name}
            </a>
          {/each}
        </nav>
      </div>
      
      <!-- Contact Info -->
      <div>
        <h3 class="font-semibold text-primary-800 mb-4">Contact Us</h3>
        <div class="space-y-3">
          <div class="flex items-center space-x-3">
            <span class="text-primary-500">{icons.phone}</span>
            <span class="text-primary-600">{contact.phone}</span>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-primary-500">{icons.email}</span>
            <span class="text-primary-600">{contact.email}</span>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-primary-500">{icons.location}</span>
            <span class="text-primary-600">{contact.address}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="border-t border-primary-200 mt-12 pt-8 text-center">
      <p class="text-primary-500">
        © {currentYear} TaxPro. All rights reserved.
      </p>
    </div>
  </div>
</footer> 