const { createElement: h, Fragment } = React;

const ProductCard = ({ name, price, oldPrice, discount, image }) => h(
  'div',
  { className: 'border rounded-lg p-4 max-w-xs text-center shadow-md bg-white' },
  [
    h('img', { src: image, alt: name, className: 'w-full h-48 object-cover mb-2 rounded' }),
    h('h3', { className: 'text-lg font-bold text-gray-800' }, name),
    h('div', { className: 'flex justify-center gap-2 mb-2' }, [
      h('span', { className: 'text-green-600 font-bold' }, `${price} تومان`),
      oldPrice && h('span', { className: 'line-through text-gray-500' }, `${oldPrice} تومان`),
      discount && h('span', { className: 'bg-red-500 text-white px-2 py-1 rounded' }, `${discount}% تخفیف`),
    ]),
    h('button', { className: 'bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700' }, 'مشاهده و خرید'),
  ]
);

const App = () => h(
  Fragment,
  null,
  h('div', { className: 'container mx-auto p-4' }, [
    h('h1', { className: 'text-3xl font-bold text-center mb-6 text-blue-800' }, 'صیادان شمالی ۲۰۲۱'),
    h('div', { className: 'banner h-64 mb-6 flex items-center justify-center text-2xl font-bold text-white' }, 'بهترین لوازم ماهیگیری و کمپینگ با قیمت‌های استثنایی'),
    h('div', { className: 'mb-6' }, [
      h('h2', { className: 'text-2xl font-bold mb-4 text-gray-800' }, 'دسته‌بندی‌ها'),
      h('div', { className: 'flex flex-wrap gap-4 justify-center' }, [
        h('a', { href: '#', className: 'bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700' }, 'چرخ ماهیگیری'),
        h('a', { href: '#', className: 'bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700' }, 'چوب ماهیگیری'),
        h('a', { href: '#', className: 'bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700' }, 'لوازم کمپ'),
        h('a', { href: '#', className: 'bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700' }, 'تور ماهیگیری'),
      ]),
    ]),
    h('h2', { className: 'text-2xl font-bold mb-4 text-gray-800' }, 'تخفیفات شگفت‌انگیز'),
    h('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' }, [
      h(ProductCard, {
        name: 'جعبه قلاب ۸ خانه',
        price: '60,000',
        oldPrice: '75,000',
        discount: '20',
        image: 'https://via.placeholder.com/150?text=جعبه+قلاب',
      }),
      h(ProductCard, {
        name: 'چرخ ماهیگیری کپوری پرو',
        price: '1,500,000',
        image: 'https://via.placeholder.com/150?text=چرخ+کپوری',
      }),
      h(ProductCard, {
        name: 'چوب ماهیگیری کربنی',
        price: '2,800,000',
        oldPrice: '3,200,000',
        discount: '12',
        image: 'https://via.placeholder.com/150?text=چوب+ماهیگیری',
      }),
      h(ProductCard, {
        name: 'تور ماهیگیری حرفه‌ای',
        price: '450,000',
        image: 'https://via.placeholder.com/150?text=تور+ماهیگیری',
      }),
    ]),
    h('div', { className: 'mt-6 text-center text-gray-700' }, [
      h('p', { className: 'text-lg mb-2' }, 'ارسال سریع با پست، تیپاکس و باربری به سراسر ایران'),
      h('p', { className: 'text-lg mb-2' }, 'ضمانت سلامت کالا - کالای معیوب را بدون هزینه پس می‌گیریم'),
      h('p', { className: 'text-lg' }, 'پشتیبانی ۲۴ ساعته از طریق چت آنلاین'),
    ]),
  ])
);

ReactDOM.render(h(App), document.getElementById('root'));
