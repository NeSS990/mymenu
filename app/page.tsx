import PromoSection from '@/components/PromoSection/PromoSection';
import FAQ from '@/components/FAQ/FAQ';
import AboutUs from '@/components/AboutUs/AboutUs'
import ContactMap from '@/components/ContactMap/ContactMap';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';
import MenuNavigation from '@/components/MenuNavigation/MenuNavigation';
import PromoSlider from '@/components/PromoSlider/PromoSlider';

export default function Home() {
  const mainDishes = [
    { name: 'Рулеты из баранины', color: '#575757', price: 1100 },
    { name: 'Мясо со шпинатом и грибами', color: '#575757', price: 690 },
    { name: 'Ленивые голубцы', color: '#575757', price: 799 },
    { name: 'Рагу из шеи жирафа', color: '#575757', price: 2500 },
  ];
  
  const salads = [
    { name: 'Краснокапустный салат', color: '#575757', price: 1100 },
    { name: 'Удовольствие Герцогини', color: '#575757', price: 690 },
    { name: 'Салат с лососем и сыром', color: '#575757', price: 799 },
    { name: 'Ассорти из салата', color: '#575757', price: 1900 },
  ];
  
  const drinks = [
    { name: 'Bubble с ежевикой', color: '#575757', price: 349 },
    { name: 'Bubble с киви', color: '#7B8D63', price: 349 },
    { name: 'Bubble ягодный', color: '#8D6B63', price: 349 },
    { name: 'High angel', color: '#745A3E', price: 349 },
  ];

  const desserts = [
    { name: 'Лавандовое счастье', color: '#2E348A', price: 1100 },
    { name: 'Хурма в шоколаде', color: '#5F4C3F', price: 690 },
    { name: 'Чоколэйт', color: '#8F6240', price: 799 },
    { name: 'Расцветающий бонсай', color: '#8B773E', price: 1900 },
  ];

  const promoImages = [
    '/promo/promo1.png',
    '/promo/promo2.png',
    '/promo/promo3.png',
  ];

  return (
    <div>
      <div>
        <WelcomeSection />
      </div>

      <div id="promo">
        <h2>Акции</h2>
        <PromoSlider images={promoImages} />
      </div>

      <div style={{ textAlign: 'center', margin: '40px auto', color: '#202020', maxWidth: '800px' }}>
  <p style={{ fontSize: '30px', fontWeight: 'bold' }}>
    Каждое блюдо — история вкуса, созданная с душой, где каждая деталь раскрывает гармонию традиций и вдохновения.
  </p>
</div>

      <div id='menu'>
        <h1>Меню</h1>
        <MenuNavigation />
        <div id='mainDishes'>
          <h2>Основные блюда</h2>
          <PromoSection title="" data={mainDishes} />
        </div>

        <div id='salads'>
          <h2>Салаты</h2>
          <PromoSection title="" data={salads} />
        </div>

        <div id='drinks'>
          <h2>Напитки</h2>
          <PromoSection title="" data={drinks} />
        </div>

        <div id='desserts'>
          <h2>Десерты</h2>
          <PromoSection title="" data={desserts} />
        </div>
      </div>

      <div id='about'>
        <AboutUs />
      </div>

      <div id='faq'>
        <FAQ />
      </div>

      <div id='contacts'>
      <ContactMap />
      </div>

    </div>
  );
}