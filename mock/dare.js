const dare = [
  'В какой одежде я выгляжу наиболее сексуально? ',
  'В каком самом странном месте ты занимался сексом?',
  'В следующем ходу помогаешь другому игроку делать то, что ему выпадет.',
  'Веди себя как курица до следующего хода.',
  'Веди себя проститутка, чтобы тебя выбрали. Затем как политик на выборах, животное в приюте, банан в магазине.',
  'Включи вибросигнал в телефоне, положи его мне на живот и позвони.',
  'Возбуди меня поцелуями за 10 секунд.',
  'Возьми в рот кусочек льда и ласкай меня языком в течение 15 секунд.',
  'Все игроки должны шлепнуть тебя по попе.',
  'Вспомни самое длинное слово, которое знаешь.',
  'Встань на коленки и покайся в одном грехе.',
  'Встань на стул и прочитай стихотворение.',
  'Выбери любого игрока, а затем расскажи ему, как подглядывала в душе за ним.',
  'Выбери часть тела, которая не считается эрогенной зоной (колени, локти...) и целуй, пока не начнет ею считаться.',
  'Выйди на балкон и спой песню.',
  'Выйди на улицу и попроси помощи у незнакомого мужчины.',
  'Выйди на улицу и прокричи, что тебя никто не любит.',
  'Выпей коктейль, который приготовил сосед слева.',
  'Выпей литр воды без остановки.',
  'Выпей ложку подсолнечного масла или съешь кусок сливочного масла.',
  'Выпей на брудершафт с любым игроком.',
  'Выпей рюмку алкоголя или литр воды.',
  'Где был наш самый романтичный поцелуй?',
  'Говори комплименты любому человеку целую минуту.',
  'Говори полчаса «мяу» после каждого слова или предложения других людей.',
  'Говори с британским акцентом.',
  'Грязно обругай кого-то матом и всяким словечками.',
  'Дай нам телефон, чтобы мы могли прочитать все смс.',
  'Делай планку минуту.',
  'Держи руку в кармане партнера слева минуту.',
  'До конца вечеринки исполняй роль часовой кукушки, подавай голос каждые 30 минут.',
  'Добавь всех присутствующих в друзья в социальной сети.',
  'Если бы разрешили оставить только одну позу, то какую?',
  'Если захочешь в туалет, попить, почесаться, спрашивай у всех участников игры разрешение.',
  'Если игрок захочет в туалет, то должен спросить об этом у каждого.',
  'Зайди со мной в душ и тщательно потри меня мочалкой.',
  'Займи мне 500 рублей и не требуй возврата.',
  'Займись уборкой комнаты после вечерин',
  'Закажи пиццу, а когда привезут, откажись.',
  'Затащи меня в примерочную на семь минут в раю.',
  'Играй на невидимой гитаре целую минуту.',
  'Изображай какую-то звезду, пока другие не догадаются.',
  'Изображай лягушку, кенгуру или шимпанзе 5 минут.',
  'Изображай цыганку и предлагай всем погадать.',
  'Изобрази битбокс. Woody Kelly , Unsplash',
  'Изобрази животных, которые попросят присутствующие.',
  'Изобрази известную личность, чтобы другие игроки угадали.',
  'Изобрази лошадку, гориллу, слона.',
  'Изобрази любимую певицу, актрису.',
  'Изобрази назойливого распространителя косметики и продай нам что-нибудь как можно дороже.',
  'Изобрази пантомиму.',
  'Изобрази свой дьявольский смех.',
  'Изобрази себя в доску пьяным.',
  'Изобрази театральную пьесу, играя одновременно разные роли. Скучно жить. Что делать?',
  'Изобрази цыганку и погадай нам.',
  'Изобрази эксгибициониста, маньяка или сумасшедшего.',
  'Исполни выполнимое желание игрока слева.',
  'Исполни танец живота.',
  'Как бы ты назвал новую позу, если бы мы ее придумали?',
  'Как ты думаешь, что в тебе заводит меня?',
  'Как часто ты думаешь о сексе?',
  'Какая прелюдия тебе нравится?',
  'Какая у тебя самая откровенная сексуальная фантазия?',
  'Какая часть моего тела тебя заводит?',
  'Какой из эротических киноэпизодов ты хотел бы повторить?',
  'Какой эротический сон ты помнишь лучше всего?',
  'Какую позу ты не любишь и почему?',
  'Какую эротическую sms ты мне написал бы?',
  'Коснись себя так, как хочешь касаться меня.',
  'Крикни на улице: «Кто хочет быть моим парнем?»',
  'Куда ты любишь смотреть, когда я сверху?',
  'Ласкай меня в двух местах сразу (руками и языком).',
  'Ляг на пол и изобрази кусок бекона на кипящей сковороде.',
  'Надень на себя любую вещь соседа справа.',
  'Надень свою одежду наизнанку и так просиди весь вечер.',
  'Надувай шарик, пока он не лопнет.',
  'Назови свой пароль от социальной сети, а потом поменяй его.',
  'Найди бездомного кота на улице и возьми к себе.',
  'Найди известных людей каждому игроку, на кого они похожи.',
  'Найди наощупь любого игрока в комнате.',
  'Найди самого симпатичного человека, а затем наговори комплиментов.',
  'Намажь губы чем-нибудь вкусным и поцелуй меня.',
  'Намочи пальцы слюной и погладь меня по груди.',
  'Напиши или позвони бывшему',
  'Напиши на мне признание в любви или комплимент языком.',
  'Напиши смс своему парню, что сегодня ночуешь у подруги.',
  'Напиши сообщение «я тебя люблю» и отправь 5 случайным контактам.',
  'Нарисуй с закрытыми глазами жирафа или другого игрока.',
  'Нарисуй себе монобровь, а затем размести фото в Инстаграме.',
  'Нарисуй себе на лице усы.',
  'Не чисти зубы завтра весь день.',
  'Неожиданно напугай любого игрока за следующие 5 минут.',
  'Носи книгу на голове 5 минут.',
  'Оближи 5 вещей в комнате и одного человека.',
  'Обмотайся туалетной бумагой и изображай мумию весь вечер.',
  'Обними всех игроков противоположного пола, а одному дай пендаль.',
  'Обними того из парней, кого любишь больше всего.',
  'Общайся пока до тебя опять не дойдет очередь только матом.',
  'Объясни свое преимущество над всеми другими присутствующими людьми. Jayson Hinrichsen , Unsplash',
  'Опиши мое поведение в постели тремя словами.',
  'Осуществи свою сексуальную фантазию прямо сейчас.',
  'Откуси или лизни мыло.',
  'Отожмись или присядь 10 раз. Стой на одной ноге минуту.',
  'Отправь всем контактам в телефоне смс “Я тебя люблю”.',
  'Переодень одежду наизнанку до конца игры.',
  'Перешли эту статью любому человеку, с предложением поиграть в нее как-нибудь.',
  'Повтори мое любимое движение в постели.',
  'Повторяй за игроком справа его действия до следующего хода.',
  'Погавкай в окно на прохожих.',
  'Подари кому-нибудь что-нибудь.',
  'Подари что-нибудь кому-нибудь',
  'Подними одного из игроков на руки.',
  'Подшути над любимым игроком.',
  'Поешь торт с завязанными глазами.',
  'Позволь другим игрокам сделать тебе прическу.',
  'Позволь игроку напротив опубликовать от твоего имени любой статус.',
  'Позволь кому-то тебя отшлепать из противоположного пола.',
  'Позвони в «McDonald’s» и спроси, где ближайший «Burger King». Или что-то похожее.',
  'Позвони в институт (на работу) и скажи, что завтра прогуляешь.',
  'Позвони любому другу и начни петь «С днем рождения» без объяснений.',
  'Позвони по случайному номеру и признайся человеку в любви.',
  'Позируй как культурист-бодибилдер одну минуту.',
  'Познакомься с кем-то на улице.',
  'Покажи всем свою последнюю переписку в телефоне. Несколько напоминаний о жизни, которые сделают тебя счастливее',
  'Покажи как ты соскучился на игроке напротив.',
  'Покажи кусочек нижнего белья присутствующим.',
  'Покажи любой фокус.',
  'Покажи мне, какую позу хочешь попробовать.',
  'Покажи на ком-нибудь как ты будешь встречать свою половинку после долгого расставания.',
  'Покажи позу, в которой обычно спишь.',
  'Покажи свои лучшие и коронные па.',
  'Покажи свой пресс или живот.',
  'Покажи свой пресс кубиками или живот.',
  'Покажи что у тебя в сумочке или карманах.',
  'Покажи, как ведет себя капризный ребенок в магазине.',
  'Покажи, как нужно целоваться на любом из игроков.',
  'Покажи, как соблазняешь других, на примере одного из игроков.',
  'Покажи, как ты надеваешь нижнее белье по утрам или принимаешь душ.',
  'Покажи, как ты обычно разрываешь отношения.',
  'Покажи, как ты прихорашиваешься по утрам перед зеркалом.',
  'Покатай на себе кого-нибудь или прокатись.',
  'Полей цветы.',
  'Поменяйся частью одежды с игроком напротив.',
  'Понюхай других игроков и скажи, чем пахнет каждый.',
  'Понюхай носок игрока с самыми яркими носками.',
  'Понюхай подмышки игрока справа, желательно противоположного пола.',
  'Пообещай всем присутствующим пригласить их на следующую вечеринку.',
  'Попроси вылить на тебя немного воды на голову.',
  'Попроси кого-то поставить тебе засос или сделай сама засос любому.',
  'Попроси нарисовать тебе другого игрока тату фломастером.',
  'Попрыгай на одной ноге 50 раз.',
  'Попытайся продать свои носки кому-нибудь.',
  'Поставь засос любому игроку на память о тебе.',
  'Посыпь сахаром дорожку от моей груди вниз и пройдись по ней языком.',
  'Потанцуй под музыку, которую выбрали другие игроки.',
  'Поцелуй в разные части тела всех игроков подряд, но нельзя повторяться.',
  'Поцелуй любой фрукт, чтобы понравилось всем.',
  'Поцелуй меня так, как мы целовались на первых свиданиях.',
  'Поцелуй первого, кто войдет в комнату.',
  'Поцелуй соседа справа.',
  'Поцелуй того, кто первый до тебя прикоснется в следующие 5 секунд.',
  'Поцелуй того, кто сидит напротив тебя.',
  'Почисти обувь соседу слева.',
  'Пощекочи меня.',
  'Пощекочи соседа слева 30 секунд.',
  'Представь, что ты вампир. Найди себе жертву и высоси немного крови.',
  'Представь, что ты жулик. А теперь попробуй убедить кого-то отдать тебе деньги.',
  'Представь, что ты стоишь на фейсконтроле. Почему бы ты не пустила бы каждого из людей.',
  'Представь, что я незнакомка в баре. Познакомься и убеди меня пойти к тебе.',
  'Приготовь всем кофе, чай.',
  'Придумай всем клички, характеризующие их.',
  'Придумай всем присутствующим новые имена, которые больше подходят.',
  'Придумай историю со словами «девушка», «кот», «лифчик», «чемодан», «поцелуй».',
  'Признайся в любви используя слова «огурец», «цыпленок», «огонь», «дуршлаг».',
  'Признайся в любви кому-то из присутствующих и пригласи на свидание.',
  'Признайся в любви кому-то из присутствующих и пригласи на свидание. В чем смысл жизни? Как найти себя?',
  'Прикинься нищим и выпрашивай у всех денег.',
  'Прикоснись к эрогенной зоне соседа справа.',
  'Приподними любого человека в комнате или попросись на ручки.',
  'Прислуживай кому-то несколько минут.',
  'Проведи линию языком от моего запястья до уха.',
  'Продекламируй стих, стоя на стуле.',
  'Продемонстрируй походку Майкла Джексона или Конора Макгрегора.',
  'Пройдись как модель по подиуму. Потом как девушка сомнительной профессии, бандит, бизнесмен, борец, политик.',
  'Прокукарекай 5 раз.',
  'Проползи или пройдись на корточках вокруг стола.',
  'Прочитай вслух переписку с одним из участников игры.',
  'Прочитай последние сообщения в социальной сети.',
  'Распусти волосы и сделай бардак на голове.',
  'Расскажи обычную историю, но используй только мат, а не нормальные слова.',
  'Расскажи свои интимные фантазии не менее 1 минуты.',
  'Расскажи смешной анекдот или историю, произошедшую с тобой.',
  'Рассказывай про одного из игроков, пока другие не догадаются кто это.',
  'Рекламируй ершик для унитаза целую минуту.',
  'Рекламируй себя минуту, словно ты хороший товар.',
  'С кем из знаменитостей ты переспал бы?',
  'Сделай 20 приседаний или отожмись.',
  'Сделай массаж любому из присутствующих.',
  'Сделай массаж ног игроку справа. Игры для большой компании',
  'Сделай пародию на любого из нас.',
  'Сделай романтичное предложение и предложит руку с сердцем кому-то.',
  'Сделай себе шляпу из бумаги и сиди в ней 10 минут.',
  'Сделай случайный звонок по случайному номеру в записной книжке.',
  'Сделай смешные или эротичные совместные селфи с каждым.',
  'Сделай ужасный мейкап и выйди на улицу.',
  'Сделай эротический массаж.',
  'Скажи каждому игроки что-то такое, что он точно не ожидает.',
  'Скажи каждому из нас по 5 приятных слов.',
  'Скажи комплимент и гадость каждому игроку.',
  'Скажи комплимент и гадость каждому игроку. Calicadoo , Unsplash',
  'Скажи мне эротичным шепотом, что тебе понравилось в нашем последнем сексе.',
  'Скачай хороший фильм и пригласи нас в гости, чтобы посмотреть его вместе.',
  'Сними любой предмет одежды.',
  'Сними один элемент одежды.',
  'Сними один элемент одежды. Nate Johnston , Unsplash',
  'Сними с меня нижнее белье без помощи рук.',
  'Сними с себя один элемент одежды.',
  'Соблазни игрока напротив за 30 секунд, используя только слова.',
  'Спародируй любого человека из присутствующих.',
  'Спой детскую песенку.',
  'Спой любовную серенаду игроку слева.',
  'Спой песню в караоке.',
  'Спой песню, под которую хочешь заняться сексом.',
  'Спорь с каким-то предметом по выбору и разговаривай с ним минуту (не человеком, а с туалетной бумагой, бананом, деньгами и т.д.)',
  'Станцуй грязный танец с игроком напротив.',
  'Станцуй лезгинку, ламбаду или русский народный танец.',
  'Станцуй развратный танец.',
  'Станцуй стоя на четвереньках.',
  'Станцуй стрип без раздевания.',
  'Станцуй танго с любым из присутствующих.',
  'Станцуй танец живота на столе или стриптиз, где шест — это один из игроков.',
  'Станцуй танец на коленях у соседа справа.',
  'Станцуй тверк так, чтобы все понравилось.',
  'Сфотографируйся топлес и выложи в соцсеть.',
  'Сходи в магазин или закажи пиццу.',
  'Сходи в туалет и спой там песню.',
  'Сходи и выкинь мусор в нелепом наряде.',
  'Съешь зубчик чеснока.',
  'Съешь фрукт максимально эротичным способом.',
  'Съешь целую шоколадку меньше чем за минуту.',
  'Съешь что-нибудь острое на кухне: перец, кетчуп, лук, лимон.',
  'Съешь что-то или выпей, но не используй для этого руки.',
  'Съешь яблоко без рук.',
  'Сядь на колени к кому-либо на 5 минут.',
  'Сядь на шпагат или просто попытайся.',
  'Тебе подфартило. Загадай желание любому игроку.',
  'Ты любишь медленный или быстрый секс?',
  'Ты хотел  бы попробовать секс втроем?',
  'Укуси сам себя за ногу или другого игрока.',
  'Устрой случайному человеку «прожарку». Высмеивай его недостатки 2 минуты.',
  'Устрой состязание армреслинга с игроком напротив.',
  'Устрой сцену ревности кому-то из людей.',
  'Ходи по улице маршем и пой гимн.',
  'Читай целую минуту свободный рэп.',
  'Что бы ты со мной сделал, будь я прикована к кровати наручниками.',
  'Что ты всегда стеснялся сказать мне во время секса?',
  'Что ты изменил бы в нашем первом сексе?',
  'Что ты подумал, когда впервые увидел меня без одежды?',
  'Что хочешь, то и делай.',
  'Что я лучше всего умею в постели?',
  'Что я могу сделать, чтобы немедленно доставить тебе оргазм?',
  'Шлепни всех противоположного пола игроков по попе.',
  'Я брызну духами на какую-то часть тела в другой комнате. Твоя задача — понять на какую.',
];

module.exports = dare;