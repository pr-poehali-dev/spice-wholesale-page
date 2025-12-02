import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

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

export default function SpicesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPackage, setSelectedPackage] = useState<string>('all');

  const filteredSpices = spicesData.filter(spice => {
    const categoryMatch = selectedCategory === 'all' || spice.category === selectedCategory;
    const packageMatch = selectedPackage === 'all' || spice.packages.includes(selectedPackage);
    return categoryMatch && packageMatch;
  });

  return (
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
  );
}
