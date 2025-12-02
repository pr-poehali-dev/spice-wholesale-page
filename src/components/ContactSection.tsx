import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
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
  );
}
