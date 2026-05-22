const { createApp } = Vue;

createApp({
  data() {
    return {
      showTopbar: true,
      cartCount: 2,
      email: '',
      newsletterMessage: '',

      selectedCategory: 'all',
      selectedPrice: 'all',

      visibleCount: 6,

      products: [
        {
          id: 1,
          name: 'Off-white Pillow',
          price: '7.99',
          oldPrice: '13.00',
          category: 'living',
          isNew: true,
          discount: 50,
          image: 'img/pillow.png',
          description: 'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.'
        },
        {
          id: 2,
          name: 'Table Lamp',
          price: '39.99',
          oldPrice: '',
          category: 'decor',
          isNew: true,
          discount: null,
          image: 'img/lamp.png',
          description: 'Like small jewels in shiny brass and gray clear glass, a mood light that creates exciting shadows on walls and ceilings'
        },
        {
          id: 3,
          name: 'White Drawer unit',
          price: '89.99',
          oldPrice: '',
          category: 'bedroom',
          isNew: false,
          discount: null,
          image: 'img/drawer.png',
          description: 'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.'
        },
        {
          id: 4,
          name: 'Cozy Sofa',
          price: '299.00',
          oldPrice: '',
          category: 'living',
          isNew: true,
          discount: null,
          image: 'img/sofa.png',
          description: 'Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.'
        },
        {
          id: 5,
          name: 'Bamboo Basket',
          price: '9.99',
          oldPrice: '',
          category: 'decor',
          isNew: false,
          discount: null,
          image: 'img/basket.png',
          description: 'With its soft shape and color, this spacious basket is just as decorative wherever you choose to put it.'
        },
        {
          id: 6,
          name: 'Black Tray table',
          price: '19.19',
          oldPrice: '',
          category: 'decor',
          isNew: false,
          discount: null,
          image: 'img/tray-table.png',
          description: 'Easy to love at a price that’s hard to resist. Buy one or buy a few and make every space where you sit more convenient.'
        }
      ]
    };
  },

  computed: {
    filteredProducts() {
      let list = [...this.products];

      if (this.selectedCategory !== 'all') {
        list = list.filter(product => product.category === this.selectedCategory);
      }

      if (this.selectedPrice === '0-20') {
        list = list.filter(product => parseFloat(product.price) <= 20);
      } else if (this.selectedPrice === '20-100') {
        list = list.filter(product => {
          const price = parseFloat(product.price);
          return price > 20 && price <= 100;
        });
      } else if (this.selectedPrice === '100+') {
        list = list.filter(product => parseFloat(product.price) > 100);
      }

      return list;
    },

    visibleProducts() {
      return this.filteredProducts.slice(0, this.visibleCount);
    }
  },

  methods: {
    closeTopbar() {
      this.showTopbar = false;
    },

    addToCart(product) {
      this.cartCount++;
      alert(product.name + ' added to cart');
    },

    toggleWishlist(product) {
      alert(product.name + ' added to wishlist');
    },

    showMore() {
      this.visibleCount += 2;
    },

    subscribeEmail() {
      if (this.email.trim() === '') {
        this.newsletterMessage = 'Please enter your email.';
        return;
      }

      this.newsletterMessage = 'Thanks for subscribing!';
      this.email = '';
    }
  },

  watch: {
    selectedCategory() {
      this.visibleCount = 6;
    },
    selectedPrice() {
      this.visibleCount = 6;
    }
  }
}).mount('#app');
