import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SpicesCatalog from '@/components/SpicesCatalog';
import TermsSection from '@/components/TermsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';

export default function Index() {
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

      <SpicesCatalog />
      <TermsSection />
      <CertificatesSection />
      <ContactSection />

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
