<script>
const keyVal = {
  'Какие сферы мы финансируем?': 'أي مجالات نموِّل؟',
  'Особое внимание уделяется стартапам в таких сферах, как образование, здравоохранение, финансовые технологии, устойчивое развитие и социальное предпринимательство, где инновации могут сыграть ключевую роль в улучшении качества жизни.': 'يُولِي اهتمامًا خاصًا للشركات الناشئة في مجالات مثل التعليم، والرعاية الصحية، وتكنولوجيا الأمور المالية، والتنمية المستدامة، وريادة الأعمال الاجتماعية، حيث يمكن للابتكار أن يلعب دورًا رئيسيًا في تحسين جودة الحياة',
  
  'Сумма финансирования': 'مبلغ التمويل',
  'Фонд предоставляет финансирование до $1,000,000 для стартапов на стадиях pre-seed и seed, с инвестиционным периодом в 2 года. Средний чек для проектов с социальной значимостью составляет от $50,000 до $150,000.': 'يوفر الصندوق تمويلًا يصل إلى $1,000,000 لبدء مرحلة ما قبل التأسيس والبذور, مع فترة استثمار في عامين. تتراوح قيمة الشيك السريع للمشاريع ذات القيمة الاجتماعية من 50.000 دولار إلى 150.000 دولار.',

  'Какие критерия есть для заявки?': 'ما هي المعايير المطلوبة لتقديم الطلب؟',
  'Критерии для заявки в фонд WAQF: проекты должны приносить пользу мусульманскому сообществу и решать его актуальные проблемы, соответствуя при этом ценностям и принципам, важным для мусульман.': 'معايير التقديم للوقف: يجب أن تفيد المشاريع المجتمع المسلم وتعالج القضايا ذات الصلة، مع أن تكون متسقة مع القيم والمبادئ التي تهم المسلمين.'
}
const keyVal_EN = {
  'Какие сферы мы финансируем?': "Which Sectors Do We Finance?",
  'Особое внимание уделяется стартапам в таких сферах, как образование, здравоохранение, финансовые технологии, устойчивое развитие и социальное предпринимательство, где инновации могут сыграть ключевую роль в улучшении качества жизни.': "We pay special attention to startups in sectors such as education, healthcare, financial technology, sustainable development, and social entrepreneurship, where innovations can play a key role in improving the quality of life.",
  
  'Сумма финансирования': "Funding Amount",
  'Фонд предоставляет финансирование до $1,000,000 для стартапов на стадиях pre-seed и seed, с инвестиционным периодом в 2 года. Средний чек для проектов с социальной значимостью составляет от $50,000 до $150,000.': "The fund provides funding up to $1,000,000 for startups at pre-seed and seed stages, with an investment period of 2 years. The average investment for socially impactful projects ranges from $50,000 to $150,000.",

  'Какие критерия есть для заявки?': "Application Criteria",
  'Критерии для заявки в фонд WAQF: проекты должны приносить пользу мусульманскому сообществу и решать его актуальные проблемы, соответствуя при этом ценностям и принципам, важным для мусульман.': "Criteria for applying to the WAQF Fund: projects should bring benefit to the Muslim community and address its pressing issues, aligning with the values and principles important to Muslims.",
}
export let lang
const t = (key) => {
  if (lang === 'ar') {
    return keyVal[key]
  } else if (lang === 'en') {
    return keyVal_EN[key]
  } else {
    return key
  }
}
let items = [
  {
    id: 1,
    title: t`Какие сферы мы финансируем?`,
    isOpen: true,
    content: t`Особое внимание уделяется стартапам в таких сферах, как образование, здравоохранение, финансовые технологии, устойчивое развитие и социальное предпринимательство, где инновации могут сыграть ключевую роль в улучшении качества жизни.`,
  },
  {
    id: 2,
    title: t`Сумма финансирования`,
    isOpen: false,
    content: t`Фонд предоставляет финансирование до $1,000,000 для стартапов на стадиях pre-seed и seed, с инвестиционным периодом в 2 года. Средний чек для проектов с социальной значимостью составляет от $50,000 до $150,000.`,
  },
  {
    id: 3,
    title: t`Какие критерия есть для заявки?`,
    isOpen: false,
    content: t`Критерии для заявки в фонд WAQF: проекты должны приносить пользу мусульманскому сообществу и решать его актуальные проблемы, соответствуя при этом ценностям и принципам, важным для мусульман.`,
  },
]
let prevId = 1

const open = (id) => {
  if (id === prevId) return

  const item = items.find(x => x.id === prevId)
  item.isOpen = false

  const obj = items.find(x => x.id === id)
  if (obj) {
    prevId = obj.id
    obj.isOpen = true
  }
  items = [...items]
}


</script>

{#each items as item (item.id) }
  <div class="relative mb-3 bg-[#edf7ff] rounded-[8px] font-railway">
    <h6 class="mb-0">
      <button
        on:click={() => open(item.id)}
        class="relative text-[19px] sm:text-[16px] flex items-center justify-between w-full p-4 text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
        data-collapse-target="collapse-1"
      >
        <span>{item.title}</span>
        <svg class={item.isOpen ? 'rotate-180' : ''} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8147 9.60089L14.2947 16.1209C13.5247 16.8909 12.2647 16.8909 11.4947 16.1209L4.9747 9.60089" stroke="#0080B5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </h6>
    <div
      data-collapse="collapse-1"
      class={`${item.isOpen ? 'h-[140px] sm:h-[200px] overflow-visible' : 'h-0  overflow-hidden'}  transition-all duration-300 ease-in-out`}
    >
      <div class="p-4 text-[15px] leading-normal text-blue-gray-500/80">
       {item.content}
      </div>
    </div>
  </div>
{/each}
