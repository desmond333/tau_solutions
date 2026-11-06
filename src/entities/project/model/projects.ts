export type ProjectCategory = 'product' | 'miniapp' | 'tools' | 'game'
export type ProjectId = 'life-os' | 'creator-hub' | 'state-lab' | 'party-defense'

export type Project = {
  id: ProjectId
  title: string
  subtitle: string
  caption: string
  category: ProjectCategory
  format: string
  tags: string[]
  description: string
  capabilities: string[]
  stack: string[]
  image: string
  secondaryImage?: string
  imageAlt: string
  visualTitle: string
  visualNote: string
  previewLayout: 'desktop' | 'mobile'
  note?: string
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'life-os',
    title: 'TAU',
    subtitle: 'Архитектор жизни',
    caption: 'Задачи, знания, привычки и финансы. Одна персональная система вместо десятка разрозненных инструментов.',
    category: 'product',
    format: 'Персональная экосистема',
    tags: ['Personal Life OS', 'Веб приложение'],
    description:
      'Персональный органайзер, который соединяет повседневные дела и большие планы. В TAU задачи связаны с целями, заметки образуют сеть знаний, а финансы, привычки и здоровье становятся частью общей картины.',
    capabilities: [
      'Задачи, цели, календарь и привычки',
      'Блочные заметки и граф связей',
      'Финансы, питание и тренировки',
      'Локальная работа и шифрованный сейф',
    ],
    stack: ['React', 'TypeScript', 'Zustand', 'Cloudflare Workers', 'FSD'],
    image: '/projects/life-desktop.webp',
    secondaryImage: '/projects/life-mobile.webp',
    imageAlt: 'TAU: редактор заметок, навигация по разделам и личный план недели',
    visualTitle: 'Жизнь.\nВ одной системе.',
    visualNote: 'Mind. Body. Time.',
    previewLayout: 'desktop',
    note: 'Проект в разработке. Закрытая бета ещё не запущена. Показаны экраны с тестовыми данными.',
  },
  {
    id: 'creator-hub',
    title: 'Яна Алфимова',
    subtitle: 'Личный бренд, который всегда рядом',
    caption: 'Mini app для маркетолога: образовательные программы, подкасты, видео и путь от знакомства до заявки.',
    category: 'miniapp',
    format: 'Mini App',
    tags: ['Личный бренд', 'Образование'],
    description:
      'Приложение для личного бренда маркетолога Яны Алфимовой. Посетитель знакомится с автором, выбирает программу, слушает подкасты и оставляет заявку. Интерфейс работает в мессенджере и в обычном браузере.',
    capabilities: [
      'Каталог программ и страницы продуктов',
      'Подкасты и короткие видео',
      'Форма заявки с валидацией',
      'Две темы оформления и два языка',
    ],
    stack: ['React', 'TypeScript', 'Radix UI', 'Zustand', 'Motion'],
    image: '/projects/creator-mobile.webp',
    secondaryImage: '/projects/creator-catalog.webp',
    imageAlt: 'Приложение Яны Алфимовой: профиль автора и каталог образовательных программ',
    visualTitle: 'Ближе\nк своей аудитории.',
    visualNote: 'A personal connection.',
    previewLayout: 'mobile',
    note: 'Экраны локальной версии приложения. Контент и показатели на экранах демонстрационные.',
  },
  {
    id: 'state-lab',
    title: 'Automata Lab',
    subtitle: 'Поведение становится понятным',
    caption: 'Лаборатория конечных автоматов. Код, визуальная симуляция и проверка возможных состояний в одном рабочем пространстве.',
    category: 'tools',
    format: 'Интерактивная лаборатория',
    tags: ['Визуальное программирование', 'Обучение'],
    description:
      'Среда, в которой программа представлена состояниями и переходами. Можно писать модели на языке .state, наблюдать их работу, изучать граф и находить ошибки через полный перебор достижимых состояний.',
    capabilities: [
      'Редактор исходников и граф состояний',
      'Симуляции лифта, светофора и турникета',
      'Проверка свойств и поиск контрпримеров',
      'Интерактивные учебные сценарии',
    ],
    stack: ['React', 'TypeScript', 'PixiJS', 'CodeMirror', 'Zustand'],
    image: '/projects/lab-desktop.webp',
    imageAlt: 'Automata Lab: исходный код, граф конечного автомата и подтверждённые свойства модели',
    visualTitle: 'Сложное.\nТеперь наглядно.',
    visualNote: 'Code. Simulate. Verify.',
    previewLayout: 'desktop',
    note: 'Проверка относится к конечной модели и её предположениям. Это не сертификация физического оборудования.',
  },
  {
    id: 'party-defense',
    title: 'Линия обороны',
    subtitle: 'Стратегия для своей компании',
    caption: 'Веди отряд, строй башни и защищай крепость. Локальные сражения до четырёх игроков на одном экране.',
    category: 'game',
    format: 'Локальная multiplayer игра',
    tags: ['Tower defense', 'До 4 игроков'],
    description:
      'Игра соединяет управление растущим отрядом и строительство обороны из фигур. Собирайте строителей, размещайте башни, отправляйте войска к соперникам и выбирайте способности своей фракции. Для совместного вечера есть серия матчей с общим счётом.',
    capabilities: [
      'Локальные матчи на 2–4 игроков и боты',
      'Башни, захват территории, футбол и гонки',
      'Кампания на одного или двоих',
      'Клавиатура и геймпады, запуск без сервера',
    ],
    stack: ['TypeScript', 'PixiJS', 'Web Audio', 'Vite'],
    image: '/projects/defense-play.webp',
    imageAlt: 'Линия обороны: матч двух команд, четыре крепости, башни и отряды на общем игровом поле',
    visualTitle: 'Один экран.\nВесь азарт.',
    visualNote: 'Bring your people.',
    previewLayout: 'desktop',
    note: '«Линия обороны» — новое название проекта в портфолио. Показан настоящий локальный матч с четырьмя ботами.',
  },
]

export const PROJECT_FILTERS = [
  { value: 'all', label: 'Все проекты' },
  { value: 'product', label: 'Продукты' },
  { value: 'miniapp', label: 'Mini Apps' },
  { value: 'tools', label: 'Инструменты' },
  { value: 'game', label: 'Игры' },
] as const

export type ProjectFilter = (typeof PROJECT_FILTERS)[number]['value']

export function isProjectFilter(value: string): value is ProjectFilter {
  return PROJECT_FILTERS.some((filter) => filter.value === value)
}

export function filterProjects(filter: ProjectFilter) {
  if (filter === 'all') return PROJECTS
  return PROJECTS.filter((project) => project.category === filter)
}
