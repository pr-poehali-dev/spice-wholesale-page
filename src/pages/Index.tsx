import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const spicesData = [
  {
    id: 1,
    name: 'Черный перец горошек',
    category: 'Перцы',
    packages: ['500г', '1кг', '5кг', '25кг'],
    origin: 'Индия',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Кориандр молотый',
    category: 'Семена и травы',
    packages: ['500г', '1кг', '10кг'],
    origin: 'Россия',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Куркума молотая',
    category: 'Корни и кора',
    packages: ['500г', '1кг', '5кг'],
    origin: 'Индия',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Паприка сладкая',
    category: 'Перцы',
    packages: ['500г', '1кг', '5кг', '25кг'],
    origin: 'Венгрия',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Корица молотая',
    category: 'Корни и кора',
    packages: ['250г', '500г', '1кг'],
    origin: 'Шри-Ланка',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    name: 'Тмин',
    category: 'Семена и травы',
    packages: ['500г', '1кг', '5кг'],
    origin: 'Египет',
    image: '/placeholder.svg'
  }
];

const certificates = [
  {
    title: 'Декларация о соответствии',
    number: 'ТС N RU Д-RU.АЛ20.В.24681',
    validUntil: '15.08.2026',
    icon: 'FileCheck'
  },
  {
    title: 'Сертификат ISO 22000',
    number: 'ГОСТ ISO 22000-2019',
    validUntil: '20.12.2025',
    icon: 'Shield'
  },
  {
    title: 'Сертификат HACCP',
    number: 'HACCP-2023-0456',
    validUntil: '10.06.2026',
    icon: 'Award'
  },
  {
    title: 'Фитосанитарный сертификат',
    number: 'ФС-2024-789',
    validUntil: '01.03.2025',
    icon: 'Leaf'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPackage, setSelectedPackage] = useState<string>('all');
  const { toast } = useToast();

  const filteredSpices = spicesData.filter(spice => {
    const categoryMatch = selectedCategory === 'all' || spice.category === selectedCategory;
    const packageMatch = selectedPackage === 'all' || spice.packages.includes(selectedPackage);
    return categoryMatch && packageMatch;
  });

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Soup" className="text-secondary" size={32} />
            <div>
              <h1 className="text-2xl font-bold">SYUGA</h1>
              <p className="text-xs text-muted-foreground">Оптовые поставки специй</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-secondary transition-colors">Каталог</a>
            <a href="#terms" className="hover:text-secondary transition-colors">Условия</a>
            <a href="#certificates" className="hover:text-secondary transition-colors">Сертификаты</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-secondary">B2B поставки</Badge>
            <h2 className="text-5xl font-bold mb-6">Надежный поставщик специй для вашего бизнеса</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Прямые поставки от производителей. Полный комплект документов. Гибкие условия для оптовых клиентов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#catalog">
                  <Icon name="Package" size={20} className="mr-2" />
                  Каталог специй
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="#contact">
                  Оставить заявку
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Truck" size={40} className="text-secondary mb-4" />
                <CardTitle>Доставка по России</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Собственная логистика. Доставка до склада клиента в любой регион РФ.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="FileText" size={40} className="text-secondary mb-4" />
                <CardTitle>Полный пакет документов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Все необходимые сертификаты качества и декларации соответствия.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Percent" size={40} className="text-secondary mb-4" />
                <CardTitle>Выгодные условия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Индивидуальные цены для оптовых клиентов. Скидки от объема.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-2">Каталог специй</h3>
          <p className="text-muted-foreground mb-8">Широкий ассортимент для профессионального использования</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="category-filter">Категория</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger id="category-filter">
                  <SelectValue placeholder="Все категории" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="Перцы">Перцы</SelectItem>
                  <SelectItem value="Семена и травы">Семена и травы</SelectItem>
                  <SelectItem value="Корни и кора">Корни и кора</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="package-filter">Объем упаковки</Label>
              <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                <SelectTrigger id="package-filter">
                  <SelectValue placeholder="Все объемы" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все объемы</SelectItem>
                  <SelectItem value="250г">250г</SelectItem>
                  <SelectItem value="500г">500г</SelectItem>
                  <SelectItem value="1кг">1кг</SelectItem>
                  <SelectItem value="5кг">5кг</SelectItem>
                  <SelectItem value="10кг">10кг</SelectItem>
                  <SelectItem value="25кг">25кг</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpices.map((spice) => (
              <Card key={spice.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Package" size={48} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{spice.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">{spice.category}</Badge>
                    <span className="text-xs">Происхождение: {spice.origin}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Доступные упаковки:</p>
                  <div className="flex flex-wrap gap-2">
                    {spice.packages.map((pkg) => (
                      <Badge key={pkg} variant="outline">{pkg}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="terms" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-8">Условия сотрудничества</h3>
          
          <Tabs defaultValue="wholesale" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="wholesale">Оптовые закупки</TabsTrigger>
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
              <TabsTrigger value="payment">Оплата</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wholesale" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Оптовые условия</CardTitle>
                  <CardDescription>Минимальные партии и системы скидок</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="ShoppingCart" size={20} className="mr-2 text-secondary" />
                        Минимальный заказ
                      </h4>
                      <p className="text-muted-foreground">От 50 000 рублей или 100 кг специй</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="TrendingDown" size={20} className="mr-2 text-secondary" />
                        Система скидок
                      </h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• От 100 000 руб — 5%</li>
                        <li>• От 300 000 руб — 10%</li>
                        <li>• От 500 000 руб — 15%</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="Clock" size={20} className="mr-2 text-secondary" />
                        Сроки поставки
                      </h4>
                      <p className="text-muted-foreground">Со склада в Москве — 1-2 дня. Под заказ — 7-14 дней.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Icon name="Users" size={20} className="mr-2 text-secondary" />
                        Персональный менеджер
                      </h4>
                      <p className="text-muted-foreground">Для постоянных клиентов — личный менеджер и индивидуальные условия</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="delivery" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Условия доставки</CardTitle>
                  <CardDescription>Логистика и география поставок</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <Icon name="MapPin" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Москва и МО</h4>
                        <p className="text-muted-foreground">Бесплатная доставка при заказе от 50 000 руб. Срок доставки — 1-2 дня.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <Icon name="Map" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Регионы России</h4>
                        <p className="text-muted-foreground">Работаем с ТК: Деловые Линии, ПЭК, Энергия. Доставка до терминала ТК бесплатно при заказе от 100 000 руб.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <Icon name="Package2" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Упаковка</h4>
                        <p className="text-muted-foreground">Специи упакованы в многослойную бумагу с полиэтиленовым вкладышем. Паллетирование и стрейч-пленка включены.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Способы оплаты</CardTitle>
                  <CardDescription>Безналичный расчет для юридических лиц</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <Icon name="CreditCard" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Безналичный расчет</h4>
                        <p className="text-muted-foreground">Оплата по счету на расчетный счет компании. Работаем с НДС и без НДС.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <Icon name="FileSignature" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Отсрочка платежа</h4>
                        <p className="text-muted-foreground">Для постоянных клиентов возможна отсрочка платежа до 14 дней после согласования.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <Icon name="Shield" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Документы</h4>
                        <p className="text-muted-foreground">Полный комплект закрывающих документов: УПД, счет-фактура, товарная накладная ТОРГ-12.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="certificates" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-2">Сертификаты и документация</h3>
          <p className="text-muted-foreground mb-8">Вся продукция сертифицирована и соответствует требованиям ТР ТС</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={cert.icon as any} size={48} className="text-secondary mb-4" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">№ {cert.number}</p>
                  <p className="text-xs text-muted-foreground">Действителен до: {cert.validUntil}</p>
                  <Button variant="link" className="px-0 mt-3">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать копию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Дополнительная документация</h4>
                  <p className="text-muted-foreground">
                    По запросу предоставляем протоколы испытаний, ветеринарные свидетельства, спецификации качества и другие документы на каждую партию товара.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-4">Контакты оптового отдела</h3>
              <p className="text-muted-foreground mb-8">Свяжитесь с нами для обсуждения условий сотрудничества</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">opt@syuga.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес склада</h4>
                    <p className="text-muted-foreground">Москва, ул. Складская, д. 15, стр. 2</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Building2" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Реквизиты</h4>
                    <p className="text-muted-foreground">ООО "Сюга Трейд"</p>
                    <p className="text-muted-foreground text-sm">ИНН 7701234567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение рабочего дня</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="company">Название компании *</Label>
                    <Input id="company" placeholder="ООО Ваша компания" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="name">Контактное лицо *</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Какие специи интересуют, планируемые объемы..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Soup" size={28} />
              <div>
                <p className="font-bold">SYUGA</p>
                <p className="text-xs text-primary-foreground/80">Оптовые поставки специй</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">© 2024 ООО "Сюга Трейд". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
