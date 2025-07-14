import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">АвтоМастер</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#repair" className="text-gray-700 hover:text-orange-500 transition-colors">Ремонт</a>
              <a href="#replacement" className="text-gray-700 hover:text-orange-500 transition-colors">Замена</a>
              <a href="#quick-repair" className="text-gray-700 hover:text-orange-500 transition-colors">Мелкосрочный ремонт</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональный
                <span className="block text-yellow-200">автосервис</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Ремонт ходовой части, быстрая замена масел и мелкосрочный ремонт. 
                Качественно, быстро, с гарантией!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Записаться онлайн
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-orange-100">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-orange-100">довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-orange-100">работаем круглосуточно</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-orange-100">гарантия качества</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для вашего автомобиля
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ходовая часть */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Icon name="Settings" className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Ремонт ходовой части</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Диагностика и ремонт подвески, амортизаторов, тормозной системы
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Замена амортизаторов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Ремонт тормозов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Развал-схождение
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Замена масел */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Icon name="Droplets" className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Замена масел и жидкостей</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Быстрая замена моторного масла, технических жидкостей
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Моторное масло
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Тормозная жидкость
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Охлаждающая жидкость
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Мелкосрочный ремонт */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Icon name="Zap" className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">Мелкосрочный ремонт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Быстрое устранение мелких неисправностей
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Замена лампочек
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Мелкий кузовной ремонт
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Замена фильтров
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Repair Section */}
      <section id="quick-repair" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Экспресс-ремонт
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Быстрое решение проблем без записи
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon name="Clock" className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">15 минут</h3>
              <p className="text-blue-100">Замена масла</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon name="Lightbulb" className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">5 минут</h3>
              <p className="text-blue-100">Замена лампочек</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon name="Filter" className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">10 минут</h3>
              <p className="text-blue-100">Замена фильтров</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon name="Wrench" className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">30 минут</h3>
              <p className="text-blue-100">Мелкий ремонт</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Свяжитесь с нами
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-500 rounded-full">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Телефон</h3>
                    <p className="text-gray-300">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-500 rounded-full">
                    <Icon name="MapPin" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Адрес</h3>
                    <p className="text-gray-300">ул. Автомобильная, 123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-500 rounded-full">
                    <Icon name="Clock" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Часы работы</h3>
                    <p className="text-gray-300">Пн-Вс: 8:00-22:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Записаться на ремонт</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
                />
                <textarea 
                  placeholder="Опишите проблему" 
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-orange-500 h-32"
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Wrench" className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold">АвтоМастер</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 АвтоМастер. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}