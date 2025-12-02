import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function TermsSection() {
  return (
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
  );
}
