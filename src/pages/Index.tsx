import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const dreamCatchers = [
    {
      id: 1,
      name: "Лунный страж",
      price: "2500₽",
      description: "Традиционный ловец снов с белыми перьями и натуральными бусинами",
      image: "/img/b91769fd-65a0-48d2-962f-bc848e611003.jpg"
    },
    {
      id: 2,
      name: "Лесной хранитель",
      price: "3200₽", 
      description: "Большой ловец снов из веток дуба с перьями совы",
      image: "/img/f9694a1a-f00c-45d5-8492-e4928ece0800.jpg"
    },
    {
      id: 3,
      name: "Морской бриз",
      price: "2800₽",
      description: "Голубой ловец снов с морскими ракушками и бирюзой",
      image: "/img/6df40fe3-42ac-44af-b722-1fc09eb654b2.jpg"
    }
  ];

  const materials = [
    { icon: "Feather", name: "Натуральные перья", desc: "Орлиные, совиные, утиные" },
    { icon: "Circle", name: "Деревянные обручи", desc: "Ива, дуб, береза" },
    { icon: "Sparkles", name: "Бусины и камни", desc: "Турмалин, аметист, агат" },
    { icon: "Zap", name: "Льняные нити", desc: "Экологичные материалы" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="py-6 px-4 border-b border-amber-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
              <Icon name="Sun" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Ловцы Снов</h1>
              <p className="text-sm text-amber-700">Ручная работа</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-amber-800 hover:text-amber-600 font-medium">Главная</a>
            <a href="#catalog" className="text-amber-800 hover:text-amber-600 font-medium">Каталог</a>
            <a href="#workshop" className="text-amber-800 hover:text-amber-600 font-medium">Мастерская</a>
            <a href="#contacts" className="text-amber-800 hover:text-amber-600 font-medium">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block p-8 bg-white/20 rounded-full">
            <Icon name="Moon" className="text-amber-800" size={64} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
            Защити свои сны
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto">
            Создаю уникальные ловцы снов из натуральных материалов. 
            Каждое изделие наполнено любовью и защитной энергией.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg">
              Смотреть каталог
            </Button>
            <Button variant="outline" className="border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white px-8 py-3 text-lg">
              О мастерской
            </Button>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Натуральные материалы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-4 inline-block p-6 bg-amber-600 rounded-full group-hover:bg-amber-700">
                  <Icon name={material.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{material.name}</h3>
                <p className="text-amber-700">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Каталог изделий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dreamCatchers.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-amber-900 text-xl">{item.name}</CardTitle>
                    <span className="text-2xl font-bold text-amber-700">{item.price}</span>
                  </div>
                  <CardDescription className="text-amber-800">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section id="workshop" className="py-20 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Моя мастерская</h2>
              <p className="text-lg text-amber-800 mb-6">
                Более 10 лет создаю ловцы снов по традиционным техникам коренных народов Америки. 
                Каждое изделие уникально и создается вручную с особым вниманием к деталям.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" size={20} />
                  <span className="text-amber-800">Только натуральные материалы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" size={20} />
                  <span className="text-amber-800">Индивидуальный подход к каждому заказу</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" size={20} />
                  <span className="text-amber-800">Доставка по всей России</span>
                </div>
              </div>
            </div>
            <div className="bg-white/50 rounded-2xl p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Процесс создания</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Подготовка обруча</h4>
                    <p className="text-amber-700">Обработка и подготовка деревянного кольца</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Плетение сети</h4>
                    <p className="text-amber-700">Создание защитного узора внутри обруча</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Декорирование</h4>
                    <p className="text-amber-700">Добавление перьев, бусин и других элементов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Связаться со мной</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" className="text-amber-600" size={20} />
                  <span className="text-amber-800">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="text-amber-600" size={20} />
                  <span className="text-amber-800">info@lovcy-snov.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" className="text-amber-600" size={20} />
                  <span className="text-amber-800">г. Москва, ул. Мастерская, д. 12</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Instagram" className="text-amber-600" size={20} />
                  <span className="text-amber-800">@lovcy_snov_handmade</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-900">Написать мне</CardTitle>
                <CardDescription className="text-amber-700">
                  Расскажите о желаемом ловце снов, и я создам что-то особенное для вас
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="border-amber-200 focus:border-amber-500" />
                <Input placeholder="Email" className="border-amber-200 focus:border-amber-500" />
                <Textarea 
                  placeholder="Расскажите о желаемом изделии..." 
                  className="border-amber-200 focus:border-amber-500 min-h-[120px]"
                />
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Icon name="Sun" className="mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">Ловцы Снов</h3>
            <p className="text-amber-200">Защита снов ручной работы</p>
          </div>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-amber-300 text-sm">
            © 2024 Ловцы Снов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;