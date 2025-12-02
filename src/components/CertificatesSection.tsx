import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export default function CertificatesSection() {
  return (
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
  );
}
