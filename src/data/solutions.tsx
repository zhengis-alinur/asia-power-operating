import ProductCard from "@/components/ProductCard";
import SolutionCards from "@/components/SolutionCards";
import { PATHS } from "@/routes";
import { Category } from "@/types/Products";
import Image from "next/image";

export const solutions = [
  {
    id: "1",
    image: "main.jpg",
    name: "Жилые комплексы",
    content: (
      <>
        <p>
          Современные жилые комплексы представляют собой решения сложных
          инженерных систем, в том числе электротехнических. Независимо от
          объема заказа наша команда готова предложить комплексный подход — от
          этапа проектирования до поставки электрооборудования на объект и
          непосредственного электромонтажа. Подразделения Asia Power Operating
          могут выполнить любую задачу, включая проектирование, поставку,
          монтаж, настройку, ввод в эксплуатацию, гарантийное и сервисное
          обслуживание. Специалисты Asia Power Operating готовы предложить и
          реализовать для наших клиентов максимально эффективные системные
          решения на каждом этапе — от организации электроснабжения крупных
          жилищных комплексов до подключения к внешним сетям. Слаженная работа
          обеспечивает скорость, комфорт и безопасность, а также показатели
          энергоэффективности, определяющие эксплуатационные расходы при
          оптимальном соотношении цены и производительности.
        </p>
        <h3>Проект электроснабжения жилых комплексов</h3>
        <p>
          Для соединения квартир и отдельно стоящих домов Поставщикам энергии
          необходимо разработать и согласовать проекты Электроснабжение жилых
          домов. Каждый объект имеет свои свойства. Что учитывают наши
          специалисты при разработке вашего проекта:
        </p>
        <ul>
          <li> - Наружное освещение здания и прилегающих территорий;</li>
          <li> - Система электрического отопления; </li>
          <li>
            - Система контроля доступа на объекты и в помещения: Электрозамки,
            электроворота, автоматические шлагбаумы;
          </li>
          <li>
            - Системы, требующие бесперебойного питания: Системы пожарной
            сигнализации, системы охранной сигнализации, системы сигнализации,
            Видеонаблюдение;
          </li>
          <li> - Система климат-контроля: вентиляция, кондиционирование;</li>
          <li> - Электрический котел; </li>
          <li>
            - Водяные контуры и системы водоснабжения: насосы, гидравлические
            ванны, Стиральная машина, посудомоечная машина;
          </li>
          <li> - Бытовые электроприборы;</li>
        </ul>
        <p>
          Благодаря использованию новейшего экономически эффективного
          электрооборудования ваше электроснабжение будет экономичным,
          качественным, а при установке нашими специалистами — безопасным и
          надежным.
        </p>
        <p>
          Цель нашей работы — предоставить нашим клиентам решения и инструменты,
          которые значительно повысят эффективность, скорость, экономичность и,
          прежде всего, качество их предприятий (или отдельных процессов).
        </p>
        <p>
          Обращаясь в компанию Asia Power Operating, вы получаете ответственного
          поставщика, который может полностью оснастить ваше помещение или
          предоставить вам готовое электротехническое решение.
        </p>
        <p>
          Ознакомьтесь с нашей высококачественной продукцией от ведущих
          производителей по всему миру!
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/1/1.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Модульные и силовые автоматы Legrand",
              image: "/solutions/1/2.jpg",
              description: `TX3; DX3; DPХЗ.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Модульные и силовые автоматы Schneider Electric",
              image: "/solutions/1/3.jpg",
              description: `Acti; Resi9.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "	Модульные автоматы и их комплектующие Chint",
              image: "/solutions/1/4.jpg",
              description: `NXB-63; 
                NXB-63S;
                Дифференциальные автоматы серии NXBLE-63; 
                Силовые автоматы серии NM1;
                NXM;
                Контактор серии NXC; 
                Модульные контакторы NCH8.
            `,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "EKF",
              image: "/solutions/1/5.jpg",
              description: `Proxima`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Кабельная продукция",
              image: "/solutions/1/6.jpg",
              description: `Кабель ВВГ нг LS; 
                Кабель ВВГ нг FRLS; 
                Кабель АВВГ; 
                Кабель КГ; 
                UTP cat.5, cat.6.
                `,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "Электроустановочные изделия Legrand",
              image: "/solutions/1/7.jpg",
              description: `Valena Life/Allure;
                Niloe;
                Bticino;
                Celiane.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Schneider Electric",
              image: "/solutions/1/8.jpg",
              description: `Asfora; Unica.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "EKF-1",
              image: "/solutions/1/9.jpg",
              description: `Рим; Минск.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Светотехническая продукция PHILIPS",
              image: "/solutions/1/10.jpg",
              description: `DN027B; 
                MESON9; 
                ECOHOME; 
                ESSENTIAL; 
                LEDBULD.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "IN HOME",
              image: "/solutions/1/11.jpg",
              description: `
                RLP-VS;
                RLP-FL; 
                DECO-ДАЙМОНД; 
                DECO-ГЛОРИЯ;
                DECO-КАРУСЕЛЬ; 
                DECO-СОЗВЕЗДИЕ; 
                Светильники светодиодные 
                герметичные серии СПП;
                Светильники светодиодные 
                герметичные серии ССП.
              `,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "ЭРА",
              image: "/solutions/1/12.jpg",
              description: `
                Светильник ЖКХ светодиодный ЭРА SPB-201;
                Светильник ЖКХ светодиодный SPB-201 с датчиком движения;
                Светильник ЖКХ светодиодный SPB-202;
                Светильник ЖКХ светодиодный ЭРА SPB-301;
                Аварийный светильник ЭРА SSA-101-3-20.
              `,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Приборы учета электроэнергии Saiman",
              image: "/solutions/1/13.png",
              description: `Трехфазные счетчики серии Дала: LO, LQ, LP, ES, EY, EP, EZ. Однофазные счетчики серии Орман: CU, CK, CY, CJ, CI, BL.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/1/14.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <h3>Видеонаблюдение</h3>
        <p>
          Если вы выберете видеонаблюдение, мы сможем собрать
          полнофункциональную систему безопасности из следующих брендов,
          соответствующую строгим требованиям вашего технического задания и
          характеристик объекта
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/1/15.jpg",
              description: `Сетевые видеокамеры;
                Аналоговые видеокамеры; 
                Сетевые видеорегистраторы; 
                Цифровые видеорегистраторы;
                Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/1/16.jpg",
              description: `Сетевые камеры; 
                Камеры HDCVI;
                PTZ-камеры;
                Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/1/17.jpg",
              description: `
                IP-камеры;
                IP-камеры с видеоаналитикой; 
                Мультиформатные камеры;
                Аналоговые HD.
            `,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/1/18.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <p>
          Главным преимуществом данной системы является то, что она позволяет
          осуществлять тщательное и полное управление сотрудниками, что упрощает
          работу отделов нормативного регулирования, безопасности и кадрового
          учета.
        </p>
        <p>Кроме того, ACS обеспечивает следующие преимущества:</p>
        <ul>
          <li> - Значительная экономия средств.</li>
          <li> - Круглосуточная работа.</li>
          <li> - Устранение человеческого фактора.</li>
        </ul>
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/solutions/1/19.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: null,
              description: `Контроллеры; Терминалы доступа; Считыватели; Настольные считыватели; Кнопки; Исполнительные устройства; Дополнительные устройства; Турникеты; Домофоны; Досмотровое оборудование.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Dahua",
              image: null,
              description: `Считыватели;
                Сетевые контроллеры;
                Домофоны;
                Аксессуары.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Rubezh",
              image: null,
              description: `Контроллеры;
                Модули доступа;
                OSPD-замки;
                Web-/OSPD-турникеты;
                Встроенное ПО;
                Считыватели.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Smartec",
              image: null,
              description: `Сетевые контроллеры;
                Автономные контроллеры; 
                Биометрические считыватели; 
                Терминалы учета рабочего времени;
                Контроль маршрутов; 
                Домофоны; 
                Идентификаторы; 
                Турникеты; 
                Металлодетекторы; 
                Шлагбаумы; 
                Блокираторы;
                Электромагнитные замки;
                Электромеханические замки;
                Доводчики.
            `,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
          ]}
        />
        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/solutions/1/20.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <p className="font-bold">
          Преимущества использования данной системы безопасности:
        </p>
        <p>
          -децентрализованная система – каждый ее сегмент может продолжать
          работать независимо при повреждении сети или в случае ремонтных работ;
        </p>
        <p> -повышенное быстродействие;</p>
        <p> -масштабируемость – защита объектов от малых до крупных;</p>
        <p>-управление противопожарной автоматикой.</p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Rubezh",
              image: null,
              description: `Центральный прибор индикации и управления;
                Программное обеспечение;   
                Приборы приемно-контрольные управления и индикации;
                Модули сопряжения и связи;
                Извещатели пожарные адресные;
                Оповещатели адресные;
                Расширители адресные;
                Модули управления.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Консэл",
              image: null,
              description: `Газовое пожаротушение; 
                Порошкове пожаротушение; 
                Компактные системы тушения.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Заря",
              image: null,
              description: `Газовое пожаротушение.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: null,
              description: `
                Приборы приемно-контрольные; 
                Блоки индикации и управления; 
                Устройства передачи данных; 
                Устройства защиты линий; 
                Адресные интерфейсные модули; 
                Блоки питания; 
                Адресные пожарные извещатели; 
                Шкафы автоматики; 
                Шкафы монтажные взрывозащищенное оборудование. 
            `,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <h3>Структурированные кабельные системы (СКС) </h3>
        <p>
          Основой построeния локальной сети и информационной инфраструктуры
          любой современной компании являются структурированные кабельные
          системы.
        </p>
        <p> Плюcы: </p>
        <p> Единая система для любого типа данных и приложениу;</p>
        <p> Очень высокая надежность, легкость переконфигурации;</p>
        <p> Расширяемость.</p>
        <SolutionCards
          cards={[
            {
              name: "Legrand",
              image: "/solutions/1/21.jpg",
              description: `Оптоволоконные кабели; Патч-панели; Кабели SF/UTP; F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в версиях F/UTP; U/UTP; SF/UTP; S/FTP.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ITK",
              image: "/solutions/1/22.jpg",
              description: `LAN-кабель; LAN-кабель GREEN; Разъемы для кабеля; Инструменты и тестеры для кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель интерфейсный огнестойкий RS485.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE Витая пара:",
              image: "/solutions/1/23.jpg",
              description: `категория 3; категория 5; категория 5E; категория 6; категория 6A; категория 7, 7A, 8; Волоконно-оптический: внутренний; внутренний/внешний; внешний;`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE Коаксиальный",
              image: "/solutions/1/24.jpg",
              description: `тип RG-6; тип RG-8; тип RG-11; тип RG-58; тип RG-59; тип SAT703N; Телефонный; Гибридный.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HPE Aruba",
              image: "/solutions/1/25.jpeg",

              description: `Шлюзы и контроллеры; Виртуальные шлюзы; Внутренние точки доступа; Наружные точки доступа; Стекируемые коммутаторы с облачным управлением.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ИЭК",
              image: "/solutions/1/26.jpg",

              description: `Лотки металлические листовые; Лотки металлические лестничные; Лотки металлические проволочные.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "2",
    image: "main.jpg",
    name: "Частные дома",
    content: (
      <>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/2/1.jpg"
            objectFit="contain"
            alt="Перечень электрооборудования, используемого в частных домах"
          />
        </div>
        <p className="text-xl">
          Перечень электрооборудования, используемого в частных домах,
          расширяется. Электроснабжение жилища требует очень тщательного
          планирования, чтобы обеспечить бесперебойную и безопасную работу
          систем водоснабжения, отопления, бытовых приборов и освещения.
        </p>
        <p className="text-xl">
          «Asia Power Operating» предлагает множество готовых вариантов и
          высококачественного оборудования, чтобы помочь вам воплотить в жизнь
          интерьер вашей мечты!
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/2/2.jpg"
            objectFit="contain"
            alt="Перечень электрооборудования, используемого в частных домах"
          />
        </div>
        <h3>
          Для комфортного освещения частных домов лампы и светильники известных
          брендов.
        </h3>
        <SolutionCards
          cards={[
            {
              name: "Виды ламп PHILIPS для комнатного освещения",
              image: "/solutions/2/3.jpg",
              description: `ECOHOME;ESSENTIAL;LEDBULD.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Лампы IN HOME серий",
              image: "/solutions/2/4.jpg",
              description: `LED-A60-VC; LED-GX53-VC; LED-СВЕЧА НА ВЕТРУ-standard; LED-СВЕЧА-deco; LED-ШАР-VC; LED-JCDRC-VC.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "ЭРА",
              image: "/solutions/2/5.jpg",
              description: `Лампа серии RED LINE; Лампа серии STD LED; Трековый светильник однофазный ЭРА TR50; Трековый светильник однофазный ЭРА TR45; Шинопровод однофазный ЭРА TR-100 - 1PT - BK 1м черный; Светильник настенно-потолочный спот ЭРА OL21; Светильник настенно-потолочный спот ЭРА OL8; Подсветка OL15; Подсветка OL9.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>
          Для качественного сбора щитового оборудования предлагается широкий
          выбор современных, надежных и высокоэффективных модульных
          автоматических выключателей и силовых автоматов.
        </h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "LEGRAND",
              image: "/solutions/2/6.jpg",
              description: `RX3;DPХЗ.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "SCHNEIDER ELECTRIC",
              image: "/solutions/2/7.jpeg",
              description: `EASY 9`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "CHINT",
              image: "/solutions/2/8.jpg",
              description: `NXB-63;NXB-63S;NCH8.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "EKF",
              image: "/solutions/2/9.jpg",
              description: `PROXIMA `,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <h3>
          Электроустановки Legrand имеют европейское качество и могут быть
          использованы в течение многих лет. Каждый элемент коллекции внесет
          свою ноту в общий стиль изысканного интерьера, и ее дизайн пропитан
          французским шармом.
        </h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Valena Life",
              image: "/solutions/2/10.png",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Niloe",
              image: "/solutions/2/11.jpeg",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Bticino",
              image: "/solutions/2/12.jpeg",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Celiane",
              image: "/solutions/2/13.jpg",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <h3>
          Благодаря широкому выбору форм, цветов и отделок электроустановочные
          изделия Schneider Electric обеспечат безопасность и комфорт в
          различных помещениях.
        </h3>
        <SolutionCards
          cards={[
            {
              name: "Asfora",
              image: "/solutions/2/14.jpg",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Unica",
              image: "/solutions/2/15.jpeg",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <h3>
          Бюджетные серий ЭУИ для открытой и скрытой установки от бренда EKF.
        </h3>
        <SolutionCards
          cards={[
            {
              name: "Рим",
              image: "/solutions/2/16.jpg",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Минск",
              image: "/solutions/2/17.jpg",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <h3>
          Мы имеем возможность на территории Казахстана в максимально короткие
          сроки с учетом пожеланий заказчика предоставить приборы учета и
          электроэнергии отечественной марки «SAIMAN».
        </h3>
        <SolutionCards
          cards={[
            {
              name: "Однофазные счетчики серии Орман",
              image: "/solutions/2/18.jpg",
              description: "CU;CK;CY;CJ;CI;BL.",
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "Газовые счетчики ",
              image: "/solutions/2/19.jpg",
              description: "RR;DE;DD;RH;RJ;RL;DC.",
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/2/20.jpg"
            objectFit="contain"
            alt="Перечень электрооборудования, используемого в частных домах"
          />
        </div>
        <h3>Видеонаблюдение</h3>
        <p>
          Если вы выберете видеонаблюдение следующих брендов, вы сможете создать
          систему безопасности, которая удовлетворит строгие технические задания
          и особенности вашего объекта.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/2/21.jpeg",
              description: `Сетевые видеокамеры;
                Аналоговые видеокамеры; 
                Сетевые видеорегистраторы; 
                Цифровые видеорегистраторы;
                Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/2/22.jpg",
              description: `Сетевые камеры; 
                Камеры HDCVI;
                PTZ-камеры;
                Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/2/23.jpg",
              description: `
                IP-камеры;
                IP-камеры с видеоаналитикой; 
                Мультиформатные камеры;
                Аналоговые HD.
            `,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <p>
          Основным преимуществом этой системы является тщательный и полный
          контроль лиц. Это делает нормирование, охрану и учет персонала более
          эффективными.
        </p>
        <p>Кроме того, СКУД обладает преимуществами, такими как:</p>
        <ul>
          <li> - Значительная экономия средств.</li>
          <li> - Круглосуточная работа.</li>
          <li> - Устранение человеческого фактора.</li>
        </ul>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/2/24.jpeg",
              description: `Кнопки; Домофоны.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Dahua",
              image: "/solutions/2/25.jpg",
              description: `Считыватели;
                Домофоны;
                Аксессуары. `,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Rubezh",
              image: "/solutions/2/26.jpg",
              description: `Модули доступа; OSDP-замки; Считыватели.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Smartec",
              image: "/solutions/2/27.jpg",
              description: `
                Домофоны; Идентификаторы; Шлагбаумы; Электромагнитные замки; Электромеханические замки.
            `,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
          ]}
        />
        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <p>Положительные стороны использования этой системы безопасности:</p>
        <p>
          - Децентрализованная система означает, что каждый ее сегмент может
          продолжать работать независимо от повреждений сети или ремонтных
          работ.
        </p>
        <p>
          - Это повышает скорость и обеспечивает масштабируемость, что позволяет
          защитить любые объекты, от малых до крупных.
        </p>
        <p>- Кроме того, система управляет противопожарной автоматикой.</p>
        <SolutionCards
          cards={[
            {
              name: "Rubezh",
              image: "/solutions/2/28.jpg",
              description: `Приборы приемно-контрольные управления и индикации; Извещатели пожарные адресные.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: "/solutions/2/29.jpg",
              description: `Приборы приемно-контрольные; Адресные пожарные извещатели.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <h3>Структурированные кабельные системы (СКС)</h3>
        <p>
          Структурированные кабельные системы являются важной частью современной
          локальной сети и информационной инфраструктуры. Топология прокладки
          СКС позволяет легко увеличить функциональность и размеры сети, если
          это необходимо.
        </p>
        <p>Плюсы:</p>
        <p>
          - Единая система, которая поддерживает любые типы данных и приложения;
        </p>
        <p>- Расширяемость и простота перепрограммирования;</p>
        <p>- Чрезвычайно надежный</p>
        <SolutionCards
          cards={[
            {
              name: "Legrand",
              image: "/solutions/2/30.jpg",
              description: `Оптоволоконные кабели; Патч-панели; Кабели SF/UTP; F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в версиях F/UTP; U/UTP; SF/UTP; S/FTP.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ITK",
              image: "/solutions/2/31.jpg",
              description: `LAN-кабель; LAN-кабель GREEN; Разъемы для кабеля; Инструменты и тестеры для кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель интерфейсный огнестойкий RS485.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE",
              image: "/solutions/2/32.jpg",
              description: `категория 3; категория 5; категория 5E; категория 6; категория 6A; категория 7, 7A, 8; Волоконно-оптический: внутренний; внутренний/внешний; внешний;`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <h3>
          Долговечная, функциональная и надежная кабельная продукция
          отечественного производства по ГОСТ стандарту.
        </h3>
        <div className="max-w-64">
          <ProductCard
            image="/solutions/2/33.jpg"
            name={""}
            link={`${PATHS.catalog}/${Category.CableAndWireProducts}`}
            description="Кабель ВВГ нг LS; Кабель ВВГ нг FRLS; Кабель АВВГ; Кабель КГ; ПВ1, ПВ3, ПВС"
          />
        </div>
      </>
    ),
  },
  {
    id: "3",
    image: "main.jpg",
    name: "Медицинские учреждения",
    content: (
      <>
        <p>
          Любой проект электроснабжения больницы уникально сложен. Это связано с
          тем, что не существует единых стандартов для всех медицинских
          учреждений. Районная больница, диагностический центр и поликлиника
          будут иметь свои собственные системы электроснабжения. Осложняется это
          еще и тем, что большинство медицинских учреждений имеют множество
          специального оборудования с нестандартными подключениями и
          электропитанием, которое можно встретить только на объектах
          медицинского назначения. В сфере здравоохранения освещение имеет
          решающее значение, поскольку оно улучшает чувства пациентов и помогает
          персоналу предоставлять необходимый уровень обслуживания. Светодиодное
          освещение не только надежный вариант, но и способ улучшить рабочую
          среду и снизить расходы, используя меньше электроэнергии и повышая
          эффективность эксплуатации. Новейшие светодиодные технологии делают
          рабочее место более динамичным, а пациенты чувствуют себя лучше.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/3/1.jpg"
            objectFit="contain"
            alt="Медицинские учреждения"
          />
        </div>
        <h3>Светильники для медицинских учреждений Philips</h3>
        <SolutionCards
          cards={[
            {
              name: "LuxSpace",
              image: "/solutions/3/2.jpeg",
              description:
                "Встрaиваемый светильник LuxSpace — это сочетание высокой эффективности, зрительного комфорта и современного дизайна.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "CoreLine Waterproof",
              image: "/solutions/3/3.png",
              description:
                "Мы применяем световые решения, обеспечивающие высокое качество освещения и значительно экономящие затраты на энергоносители и обслуживание, независимо от того, новое ли или отреставрированное здание.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "CoreLine Panel",
              image: "/solutions/3/4.png",
              description:
                "Универcальные потолочные светодиодные светильники потребляют на 40% меньше электроэнергии, чем трубчатые люминесцентные лампы. Обеспечивают равномерное освещение за счет равномерно распределенной световой поверхности.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "FlexBlend",
              image: "/solutions/3/5.jpeg",
              description:
                "FlexBlend демонстрирует возможности светодиодного освещения для приемных кабинетов.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "PowerBalance",
              image: "/solutions/3/6.jpg",
              description:
                "Недорогие, безопасные и качественные в областях применения, где гигиена имеет решающее значение (например, в крупных больницах).",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "PowerBalance gen2",
              image: "/solutions/3/7.jpeg",
              description:
                "Светодиодные встраиваемые потолочные светильники, которые можно использовать для общего освещения. Светодиодные светильники являются идеальным заменителем традиционных люминесцентных ламп. Экономят на 45% больше электроэнергии по сравнению с функциональными светильниками под лампы TL5 и требуют минимального обслуживания.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>Так же предлагаем Вам освещение других производителей</h3>
        <SolutionCards
          cards={[
            {
              name: "Световые технологии",
              image: "/solutions/3/8.jpg",
              description:
                "SOL S LED накладной круглый светодиодный светильник; SOL P LED подвесной круглый светодиодный светильник; SLIM CLEAN LED светодиодные светильники с IP защитой 54; UGR DL PREMIUM; STANDARD LED;",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "ЭРА",
              image: "/solutions/3/9.jpg",
              description:
                "Аварийный светильник светодиодный ЭРА SPO; Бактерицидная ультрафиолетовая лампа ЭРА UV-С; IN HOME: Светильник светодиодный СПБ-2-КРУГ; Светильник светодиодный СПБ-2-КВАДРАТ; Светильник светодиодный СПБ-2Д-КВАДРАТ.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "IN HOME",
              image: "/solutions/3/10.jpg",
              description:
                "Светильник светодиодный СПБ-2-КРУГ; Светильник светодиодный СПБ-2-КВАДРАТ; Светильник светодиодный СПБ-2Д-КВАДРАТ.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>
          Бюджетные серий электроустановочных изделий для открытой и скрытой
          установки от бренда EKF.
        </h3>
        <div className="w-1/2">
          <ProductCard
            name="EKF"
            description="Рим; Минск; Мурманск."
            link={`${PATHS.catalog}/${Category.ElectricalInstallationProducts}`}
            image="/solutions/3/11.jpg"
          />
        </div>
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/3/12.jpeg",
              description: `Контроллеры; Терминалы доступа; Считыватели; Настольные считыватели; Кнопки; Исполнительные устройства; Дополнительные устройства; Турникеты; Досмотровое оборудование.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/3/13.jpg",
              description: `Считыватели; Сетевые контроллеры; Аксессуары.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Rubezh",
              image: "/solutions/3/14.jpg",
              description: `Контроллеры; Модули доступа; OSPD-замки; Web-/OSPD-турникеты; Считыватели.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/3/15.jpg",
              description: `Сетевые контроллеры; Автономные контроллеры; Биометрические считыватели; Терминалы учета рабочего времени; Контроль маршрутов; Идентификаторы; Электромагнитные замки; Электромеханические замки;`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <h3>
          Широкий ассортимент современных, надежных и высокоэффективных
          модульных автоматических выключателей и силовых автоматов для
          качественного сбора щитового оборудования.
        </h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Schneider Electric",
              image: "/solutions/3/16.jpeg",
              description: `ACTI9; RESI 9. TeSys контакторы`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Legrand",
              image: "/solutions/3/17.jpg",
              description: `TX3;DX3;DPX3.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Chint",
              image: "/solutions/3/18.jpg",
              description: `NXB-63; NB1-63H; ДИФ NXBLE-63; Устройство автоматического ввода резерва NXZM-125S; NM1, NXМ силовые автоматы; Пускатель NS2.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "EKF",
              image: "/solutions/3/19.jpg",
              description: `1)PROXIMA; 2)AVERES.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <h3>
          Мы имеем возможность на территории Казахстана в максимально короткие
          сроки с учетом пожеланий заказчика предоставить приборы учета и
          электроэнергии отечественной марки «SAIMAN».
        </h3>
        <SolutionCards
          cards={[
            {
              name: "Трехфазные счетчики серии Дала",
              image: "/solutions/3/20.jpg",
              description: `LO;LQ;LP;ES;EY;EP;EZ.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "LO;LQ;LP;ES;EY;EP;EZ.",
              image: "/solutions/3/21.jpg",
              description: `CU;CK;CY;CJ;CI;BL.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <p>
          Преимущества использования этой системы безопасности включают
          следующие:
        </p>
        <p>
          - децентрализованная система — каждый ее компонент может продолжать
          функционировать независимо от повреждений сети или ремонтных работ.
        </p>
        <p>- повышение скорости;</p>
        <p>- масштабируемость — защита любых размеров объектов; </p>
        <p>- управление противопожарной автоматикой.</p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Rubezh",
              image: "/solutions/3/22.jpg",
              description: `Центральный прибор индикации и управления; Программное обеспечение; Приборы приемно-контрольные управления и индикации; Модули сопряжения и связи; Извещатели пожарные адресные; Оповещатели адресные; Расширители адресные; Модули управления.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: "/solutions/3/23.jpg",
              description: `Приборы приемно-контрольные; Блоки индикации и управления; Устройства передачи данных; Устройства защиты линий; Адресные интерфейсные модули; Блоки питания; Адресные пожарные извещатели; Шкафы автоматики; Шкафы монтажные взрывозащищенное оборудование.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Консэл",
              image: "/solutions/3/24.jpg",
              description: `Газовое пожаротушение; Порошкове пожаротушение; Компактные системы тушения.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Заря",
              image: "/solutions/3/25.jpg",
              description: `Газовое пожаротушение.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/3/26.jpg"
            objectFit="contain"
            alt="Медицинские учреждения"
          />
        </div>
        <h3>
          Надежные решения для питания и защиты Вашего оборудование с помощью
          источников бесперебойного питания.
        </h3>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/3/27.jpg"
            objectFit="contain"
            alt="Медицинские учреждения"
          />
        </div>
        <p>
          <b>Eaton серии:</b> 5E; 5PX; 5PX GEN2;9SX; 93PS;
        </p>
        <p>
          <b>Legrand:</b> Archimod; Trimod; Megaline; Keor LP.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/3/28.jpg"
            objectFit="contain"
            alt="Медицинские учреждения"
          />
        </div>
        <h3>LCS3 - структурированные кабельные системы</h3>
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/solutions/3/29.jpg"
            objectFit="contain"
            alt="Медицинские учреждения"
          />
        </div>
        <p>
          Широкий спектр решений на базе медного кабеля и оптического волокна в
          структурированной кабельной системе LCS3 помогает решить проблемы,
          связанные с увеличением трафика информации, расширением
          локально-вычислительных сетей и необходимостью увеличения скорости
          передачи данных.
        </p>
        <p>
          - LCS3 может использоваться в решениях как для локальных сетей (LAN),
          так и для многофункциональных центров обработки данных (ЦОД). Эти
          преимущества включают высокую скорость передачи данных,
          энергоэффективность и бесперебойность работы. Использование медных
          патч-панелей высокой плотности и коннекторов RJ45 нового поколения
          высокой плотности в сочетании с инновационной системой монтажа и
          обслуживания являются дополнительными преимуществами системы. <br />-
          Оптические полки нового поколения, которые легко монтируются и
          обслуживаются, обеспечивают масштабируемость системы LCS3.
          Модулированные оптические полки с кассетами отличают продукт от
          конкурентов благодаря возможности совместной установки медных и
          оптических кассет, а также быстрой фиксации и извлечения из шкафа или
          стойки. Оптические полки высокой плотности (144 порта LC) и
          сверхвысокой плотности были первыми в LCS3. <br />- Состоит из
          коннекторов, патч-кордов, патч-панелей и кабелей для высокоскоростного
          решения на базе медного кабеля LCS3 категории 8. Новейшая система
          распределения воздушных потоков в усовершенствованных
          энергоэффективных шкафах с высокой нагрузочной способностью
          оптимизирует энергозатраты. Кроме того, настенные шкафы, серверы и
          телекоммуникационные устройства, входящие в систему LCS3, могут
          выдерживать нагрузку до 1500 кг (настенные 100 кг). <br />- Модульная
          кассетная система и коннекторы нового поколения высокой плотности
          являются одними из многочисленных запатентованных инноваций Legrand,
          представленных в LCS3. Комплект медных коннекторов сертифицирован
          стандартом PoE+ и готов к использованию в соответствии с новым
          стандартом PoE++.
        </p>
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/solutions/3/30.jpg"
            objectFit="contain"
            alt="Медицинские учреждения"
          />
        </div>
        <p>
          <b>Legrand:</b> Оптоволоконные кабели; Патч-панели; Кабели SF/UTP;
          F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в
          версиях F/UTP; U/UTP; SF/UTP; S/FTP;
        </p>
        <p>
          <b>ITK:</b> LAN-кабель; Разъемы для кабеля; Инструменты и тестеры для
          кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель
          огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель
          интерфейсный огнестойкий RS485; Оптический кабель; Оптические кроссы;
          Оптические розетки, разъемы и модули Keystone; Оптические адаптеры;
          Оптические монтажные шнуры; Оптические соединительные шнуры;
          Оптические переходные шнуры; Оптические кроссы; Оптические кабельные
          сборки; Оптические шнуры.
        </p>
        <p>
          <b>HYPERLINE:</b> Газовое пожаротушение; Порошкове пожаротушение;
          Компактные системы тушения.
        </p>
        <p>
          <b>ИЭК:</b> Лотки металлические листовые; Лотки металлические
          лестничные; Лотки металлические проволочные.
        </p>
        <p>
          <b>HPE Aruba:</b> Шлюзы и контроллеры; Виртуальные шлюзы; Внутренние
          точки доступа; Наружные точки доступа; Стекируемые коммутаторы с
          облачным управлением.
        </p>
        <h3>
          Кабельная продукция с индексом HF – не содержащий галогенов
          (Halogen-Free).
        </h3>
        <h3>
          Индекс (А) в марках означает, что кабель соответствует категории А по
          нераспространению горения.
        </h3>
        <SolutionCards
          cards={[
            {
              name: "",
              image: "/solutions/3/31.jpg",
              description: `ППГнг(А)-HF;ППГЭнг(А)-HF;ПБПнг(А)-HF.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <h3>Видеонаблюдение</h3>
        <p>
          Если вы выберете видеонаблюдение следующих брендов, вы сможете создать
          систему безопасности, которая удовлетворит строгие технические задания
          и особенности вашего объекта.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/3/32.jpeg",
              description: `Сетевые видеокамеры; Аналоговые видеокамеры; Сетевые видеорегистраторы; Цифровые видеорегистраторы; Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/3/33.jpg",
              description: `Сетевые камеры; Камеры HDCVI; PTZ-камеры; Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/3/34.jpg",
              description: `IP-камеры; Мультиформатные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "4",
    image: "main.jpg",
    name: "Спортивные учреждения",
    content: (
      <>
        <p>
          С каждым годом увеличивается количество людей, которые участвуют в
          спортивных мероприятиях, будь то любительские или профессиональные.
          СМИ все больше уделяют спортивной тематике. Повышенный интерес к
          спорту помогает человеку развиваться. Ежегодно в Казахстане появляются
          новые спортивные центры. Электротехническое оборудование объекта
          играет большую роль в оценке его качества.
        </p>
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/solutions/4/1.jpg"
            objectFit="contain"
            alt="Спортивные учреждения"
          />
        </div>
        <p>
          Когда дело доходит до освещенности <b>спортивных сооружений</b>,
          первоочередной задачей является обеспечение необходимого уровня
          освещенности для того, чтобы спортсмены могли комфортно играть,
          достаточно света для зрителей с трибун и достаточной цветопередачи и
          отсутствия мерцаний для проведения телетрансляций и для стабильной
          работы видеокамер.
          <br /> <b>Санитарные стандарты</b> и правила регулируют искусственное
          освещение, а спортивные стандарты регулируют спортивное освещение в
          соответствии с видом спорта, классом мероприятия, назначением
          спортивного сооружения и видом спорта. <br />
          Таким образом, мы предлагаем решения в области освещения для каждого
          вида спорта и спортивного сооружения (открытая или закрытая площадка)
          в соответствии с назначением спортивного сооружения.
        </p>
        <h3>
          Мы работаем над тем, чтобы сделать спортивную площадку удобной для
          тренировок и крупных мероприятий!
        </h3>
        <p>
          Вы можете сократить расходы благодаря энергоэффективной светодиодной
          системе освещения, сетевым возможностям и удаленному мониторингу.
          Получите возможность проводить различные мероприятия на одном стадионе
          и получите новые источники дохода. Высокая цветопередача и
          однородность света улучшают атмосферу площадок. Высококачественное
          освещение внутри и вокруг стадиона повышает безопасность и
          оптимизирует движение в проходах.
        </p>
        <h3>Светильники и фонари для спортивных сооружений от PHILIPS</h3>
        <SolutionCards
          cards={[
            {
              name: "Серия Arena Vision",
              image: "/solutions/4/2.png",
              description: `Прожекторы Arena Vision предназначены для больших крытых арен и спортивных стадионов. Они значительно увеличивают эмоциональный эффект спортивных состязаний для телезрителей и болельщиков на трибунах. Исключительный световой поток, оптическая эффективность, простота монтажа, надежность и универсальность ArenaVision поднимают стандарты качества спортивного освещения. Они идеально подходят для крытых спортивных площадок и открытых спортивных сооружений, а также для других целей.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Серия Sports Star",
              image: "/solutions/4/3.png",
              description: `Легко поможет вам достичь необходимого уровня освещенности на различных объектах с различным уровнем сложности. Прожекторы заливающего освещения Philips Sports Star LED поставляют новые стандарты благодаря отличному распределению света, высокой эффективности эксплуатации и низкому уровню загрязнения окружающей среды. Прожекторы Sports Star предназначены для мачтового освещения, а также для заливного освещения спортивных объектов и открытых площадок.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Tango G3 — BVP38x",
              image: "/solutions/4/4.png",
              description: `Отличное заливающее освещение с низкими начальными затратами. Энергосберегающий светодиодный прожектор Philips Tango G3 идеально подходит для многих объектов, которые требуют заливающего освещения.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>Прожекторы Световые технологии</h3>
        <p>
          Освещение спортивных площадок должно создавать благоприятную атмосферу
          для спортсменов и обеспечивать их комфорт. Практика показывает, что
          холодные оттенки работают лучше всего с этой задачей. Прожекторы
          средней мощности от торговой марки Световые технологии могут
          обеспечить освещение такого вида.
        </p>
        <p>
          <b>Варианты решений:</b> OLYMPIC LED; SPORTLUX; LEADER LED; FORWARD;
          ATHLET.
        </p>
        <div className="flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src="/solutions/4/5.jpg"
            objectFit="contain"
            alt="Спортивные учреждения"
          />
          Olymic LED
        </div>
        <h3>Светильники ЭРА</h3>
        <p>
          Светодиодные светильники ЭРА соответствуют требованиям к освещению
          спортивных комплексов благодаря своей высокой энергоэффективности. Они
          экологически чисты, легко устанавливаются и обслуживаются, что
          позволяет экономить до 80% электроэнергии. Светильники оснащены
          рассеивателями для предотвращения слепящего эффекта.
        </p>
        <p>
          <b>Варианты решений:</b> SPP-402;SPP-403;DBA-102-0-20;LPR-023.
        </p>
        <div className="flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src="/solutions/4/6.jpg"
            objectFit="contain"
            alt="Спортивные учреждения"
          />
          DBA-102-0-20
        </div>
        <h3>Видеонаблюдение</h3>
        <p>
          Покупая видеонаблюдение от следующих брендов, вы можете создать
          систему безопасности с широким спектром функций, которая удовлетворит
          строгие технические задания и особенности конкретного объекта.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/7.jpeg",
              description: `Сетевые видеокамеры; Аналоговые видеокамеры; Сетевые видеорегистраторы; Цифровые видеорегистраторы; Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/4/8.jpg",
              description: `Сетевые камеры; Камеры HDCVI; PTZ-камеры; Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/9.jpg",
              description: `IP-камеры; IP-камеры с видеоаналитикой; Мультиформатные камеры; Аналоговые HD.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <h3>Автоматы и их комплектующие</h3>
        <p>
          Спортивные комплексы и стадионы, а также другие объекты, нуждаются в
          безопасной и бесперебойной подаче электроэнергии ко всем
          функциональным устройствам. Электрощитовое оборудование, включая
          главные распределительные щиты, ВРУ, распределительные пункты,
          автоматический ввод резерва и другие элементы, поможет справиться с
          этой задачей и обеспечить защиту отходящих линий.
        </p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Schneider Electric",
              image: "/solutions/4/10.jpg",
              description: `Acti 9; Easypact силовые автоматы; TeSys.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Legrand",
              image: "/solutions/4/11.jpg",
              description: `TX3;DX3;DPX3.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "EKF",
              image: "/solutions/4/12.jpg",
              description: `PROXIMA;AVERES.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Chint",
              image: "/solutions/4/13.jpg",
              description: `NXB-63; NB1-63H; NXBLE-63; NM1, NXМ силовые автоматы; Пускатель NS2.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <h3>Электроустановочные изделия</h3>
        <SolutionCards
          cards={[
            {
              name: "Электроустановочные изделия Legrand",
              image: "/solutions/4/14.jpg",
              description: `Mosaic; Niloe.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Электроустановочные изделия EKF",
              image: "/solutions/4/15.jpg",
              description: `Минск; Рим; Мурманск.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <h3>Приборы учета электроэнергии Saiman</h3>
        <SolutionCards
          cards={[
            {
              name: "Трехфазные счетчики серии Дала",
              image: "/solutions/4/16.jpg",
              description: `LO;LQ;LP;ES;EY;EP;EZ.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "Однофазные счетчики серии Орман",
              image: "/solutions/4/17.jpg",
              description: `CU;CK;CY;CJ;CI;BL.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <h3>Трансформаторы</h3>
        <SolutionCards
          cards={[
            {
              name: "Трансформаторы Saiman",
              image: "/solutions/4/18.jpg",
              description: `Шинный от 200А до 1000А; Опорный от 75А до 400А.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "Трансформаторы Schneider Electric",
              image: "/solutions/4/19.jpg",
              description: `Трансформатор тока технологии PowerLogic от 250А до 1500А.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <p>
          Основным преимуществом этой системы является тщательный и полный
          контроль лиц. Это делает нормирование, охрану и учет персонала более
          эффективными. Кроме того, СКУД обладает следующими преимуществами:
          <br />
          - значительная экономия денег; <br />
          - круглосуточное функционирование; <br /> - отсутствие влияния
          человека.
        </p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/20.jpeg",
              description: `Контроллеры; Терминалы доступа; Считыватели; Настольные считыватели; Кнопки; Исполнительные устройства; Дополнительные устройства; Турникеты; Домофоны; Досмотровое оборудование.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Dahua",
              image: "/solutions/4/21.jpg",
              description: `Считыватели; Сетевые контроллеры; Домофоны; Аксессуары.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Rubezh",
              image: "/solutions/4/22.jpg",
              description: `Контроллеры; Модули доступа; OSDP-замки; Web-/OSDP-турникеты; Встроенное ПО; Считыватели.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/23.jpg",
              description: `Сетевые контроллеры; Автономные контроллеры; Биометрические считыватели; Терминалы учета рабочего времени; Контроль маршрутов; Домофоны; Идентификаторы; Турникеты; Металлодетекторы; Шлагбаумы; Блокираторы; Электромагнитные замки; Электромеханические замки; Доводчики.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
          ]}
        />

        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Rubezh",
              image: "/solutions/4/24.jpg",
              description: `Центральный прибор индикации и управления;
                Программное обеспечение;   
                Приборы приемно-контрольные управления и индикации;
                Модули сопряжения и связи;
                Извещатели пожарные адресные;
                Оповещатели адресные;
                Расширители адресные;
                Модули управления.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Консэл",
              image: "/solutions/4/26.jpg",
              description: `Газовое пожаротушение; 
                Порошкове пожаротушение; 
                Компактные системы тушения.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Заря",
              image: "/solutions/4/27.jpg",
              description: `Газовое пожаротушение.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/25.jpg",
              description: `
                Приборы приемно-контрольные; 
                Блоки индикации и управления; 
                Устройства передачи данных; 
                Устройства защиты линий; 
                Адресные интерфейсные модули; 
                Блоки питания; 
                Адресные пожарные извещатели; 
                Шкафы автоматики; 
                Шкафы монтажные взрывозащищенное оборудование. 
            `,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <h3>Структурированные кабельные системы (СКС) </h3>
        <SolutionCards
          cards={[
            {
              name: "Legrand",
              image: "/solutions/4/28.png",
              description: `Оптоволоконные кабели; Патч-панели; Кабели SF/UTP; F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в версиях F/UTP; U/UTP; SF/UTP; S/FTP.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ITK",
              image: "/solutions/4/29.jpg",
              description: `LAN-кабель; LAN-кабель GREEN; Разъемы для кабеля; Инструменты и тестеры для кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель интерфейсный огнестойкий RS485.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE Витая пара:",
              image: "/solutions/4/30.jpg",
              description: `категория 3; категория 5; категория 5E; категория 6; категория 6A; категория 7, 7A, 8; Волоконно-оптический: внутренний; внутренний/внешний; внешний;`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },

            {
              name: "HPE Aruba",
              image: "/solutions/4/31.jpeg",

              description: `Шлюзы и контроллеры; Виртуальные шлюзы; Внутренние точки доступа; Наружные точки доступа; Стекируемые коммутаторы с облачным управлением.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ИЭК",
              image: "/solutions/4/32.jpg",

              description: `Лотки металлические листовые; Лотки металлические лестничные; Лотки металлические проволочные.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <h3>Кабельная продукция</h3>
        <SolutionCards
          cards={[
            {
              name: "Кабельная продукция",
              image: "/solutions/4/33.jpg",
              description: `ВВГ нг LS; ВВГ нг FRLS; АВВГ; КГ.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "5",
    image: "main.jpg",
    name: "Образование",
    content: (
      <>
        <p>
          В настоящее время электроснабжение школы является многофункциональным
          объектом. Он требует от проектировщиков соблюдения строгих стандартов,
          таких как высокий уровень освещенности, безопасный доступ к
          электрооборудованию, надежность и применение специфических схемных
          решений, а также создания современных, отвечающих последним
          требованиям учебных, санитарных, бытовых помещений и отдельных
          специальных сооружений. Продукты, разработанные «Asia Power
          Operating», могут улучшить обстановку в начальных школах и
          университетах, а также обеспечить безопасность учащихся.
        </p>
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/solutions/5/1.jpg"
            objectFit="contain"
            alt="Спортивные учреждения"
          />
        </div>
        <p>
          Преимущества выбора Asia Power Operating: <br />
          - Повышение качества жизни студентов, преподавателей и посетителей;
          <br />
          - Хорошее освещение в кабинетах обеспечивает длительное фокусирование
          внимания; <br />
          - Комфортные и безопасные условия для работы в школьных лабораториях и
          мастерских; <br />
          - Снижение количества потребляемой энергии;
          <br />
          - Cнижение количества углекислого газа, выбрасываемого в атмосферу.
          <br />
          Мы рады предложить Вам высококачественную продукцию от ведущих
          производителей для учебных заведений!
        </p>

        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/5/2.jpg"
            objectFit="contain"
            alt="Спортивные учреждения"
          />
        </div>
        <h3>Освещение</h3>
        <p>
          К примеру, накладной светильник LTX LED с призматическим рассеивателем
          от Световые технологии обеспечивает индекс цветопередачи {">"}90, что
          является отличным показателем и не искажает натуральный цвет того или
          иного предмета. Коэффициент пульсации освещенности – это
          характеристика пульсации светового потока (его также называют эффектом
          мерцания). К примеру у линейных светильников TrueLine Suspended от
          Philips этот показатель, значение мерцания составляет 1, это значит,
          что освещение придает визуальный комфорт и активную
          производительность, также дает возможность избежать негативных
          последствий таких как, усталость и головные боли.
        </p>
        <p>
          К примеру, накладной светильник LTX LED с призматическим рассеивателем
          от Световой технологии имеет индекс цветопередачи {">"}90, что
          является отличным показателем, который не искажает цвета реального
          предмета. Характеристики пульсации светового потока называются
          коэффициентом пульсации освещенности или эффектом мерцания. К примеру,
          у линейных светильников TrueLine Suspended от Philips есть показатель
          мерцания 1, что означает, что освещение обеспечивает визуальный
          комфорт и активную производительность, а также помогает предотвратить
          усталость и головные боли.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Philips",
              image: "/solutions/5/3.jpg",
              description:
                "Светодиодный светильник серии PowerBalance; Линейные светильники серии TrueLine Suspended.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Световые технологии",
              image: "/solutions/5/4.jpg",
              description:
                "ASM/S; LTX LED; RIVAL ECO LED; FLAME DR UNI LED; SAFARI DL LED; OPL/S ECO LED;",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "ЭРА",
              image: "/solutions/5/5.jpg",
              description:
                "Светодиодные панели серии SPO-6; Линейные светильники серии SPO-531; Линейные светильники серии SPO-532; Аварийные светильники серии SSA-101; Аварийные светильники серии SSA-103.",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>Электроустановочные изделия</h3>
        <SolutionCards
          cards={[
            {
              name: "EKF",
              image: "/solutions/5/6.jpg",
              description: "Минск; Рим.",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Legrand",
              image: "/solutions/5/7.jpeg",
              description: "Niloe",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Schneider Electric",
              image: "/solutions/5/8.jpg",
              description: "Asfora",
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <h3>Автоматы и их комплектующие</h3>
        <p>
          Надежная система электроснабжения необходима для объектов, таких как
          школы. Эта система должна обеспечивать стабильную работу инженерных и
          технологических систем предприятия, а также создавать комфортные
          условия для учащихся.
        </p>
        <SolutionCards
          cards={[
            {
              name: "EKF",
              image: "/solutions/5/9.jpg",
              description: "Proxima; Averes.",
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Chint",
              image: "/solutions/5/10.jpg",
              description:
                "NXB-63; NB1-63H; NXBLE-63; Устройство автоматического ввода резерва NXZM-125S; NM1, NXМ силовые автоматы; Пускатель NS2; Реле серии NXR.",
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <h3>Приборы учета электроэнергии Saiman</h3>
        <SolutionCards
          cards={[
            {
              name: "Трехфазные счетчики серии Дала",
              image: "/solutions/5/11.jpg",
              description: `LO;LQ;LP;ES;EY;EP;EZ.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "Однофазные счетчики серии Орман",
              image: "/solutions/5/12.jpg",
              description: `CU;CK;CY;CJ;CI;BL.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <h3>Шкафы и щиты</h3>
        <SolutionCards
          cards={[
            {
              name: "Saiman",
              image: "/solutions/5/13.png",
              description: `Металлические встраиваемые и накладные щиты Saiman разной модульности`,
              link: `${PATHS.catalog}/${Category.Cabinets}`,
            },
            {
              name: "Schneider Electric",
              image: "/solutions/5/14.jpg",
              description: `Распределительные пластиковые щиты Schneider Electric разной модульности серии Resi 9 MP`,
              link: `${PATHS.catalog}/${Category.Cabinets}`,
            },
          ]}
        />
        <h3>Видеонаблюдение</h3>
        <p>
          Если вы выберете видеонаблюдение, мы сможем собрать
          полнофункциональную систему безопасности из следующих брендов,
          соответствующую строгим требованиям вашего технического задания и
          характеристик объекта
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/5/15.jpeg",
              description: `Сетевые видеокамеры;
                Аналоговые видеокамеры; 
                Сетевые видеорегистраторы; 
                Цифровые видеорегистраторы;
                Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/5/16.jpg",
              description: `Сетевые камеры; 
                Камеры HDCVI;
                PTZ-камеры;
                Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/5/17.jpg",
              description: `
                IP-камеры;
                IP-камеры с видеоаналитикой; 
                Мультиформатные камеры;
                Аналоговые HD.
            `,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <h3>Структурированные кабельные системы (СКС) </h3>
        <SolutionCards
          cards={[
            {
              name: "Legrand",
              image: "/solutions/4/28.png",
              description: `Оптоволоконные кабели; Патч-панели; Кабели SF/UTP; F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в версиях F/UTP; U/UTP; SF/UTP; S/FTP.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ITK",
              image: "/solutions/4/29.jpg",
              description: `LAN-кабель; LAN-кабель GREEN; Разъемы для кабеля; Инструменты и тестеры для кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель интерфейсный огнестойкий RS485.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE Витая пара:",
              image: "/solutions/4/30.jpg",
              description: `категория 3; категория 5; категория 5E; категория 6; категория 6A; категория 7, 7A, 8; Волоконно-оптический: внутренний; внутренний/внешний; внешний;`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },

            {
              name: "HPE Aruba",
              image: "/solutions/4/31.jpeg",

              description: `Шлюзы и контроллеры; Виртуальные шлюзы; Внутренние точки доступа; Наружные точки доступа; Стекируемые коммутаторы с облачным управлением.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ИЭК",
              image: "/solutions/4/32.jpg",

              description: `Лотки металлические листовые; Лотки металлические лестничные; Лотки металлические проволочные.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <h3>
          Низкотоксичные кабели LTx для монтажа силовых линии в образовательных
          учреждениях
        </h3>
        <p>ВВГ нг LS LTx; ВВГ нг FRLS LTx.</p>
        <Image
          width={200}
          height={200}
          src="/solutions/5/18.jpg"
          objectFit="contain"
          alt="Спортивные учреждения"
        />
        <p>
          Людям чаще всего вредит не само открытое пламя, а продукты горения,
          когда происходит возгорание. Таким образом, в таких зданиях
          прокладывают кабели, которые выделяют мало токсичных веществ при
          пожаре. В техническом регламенте о требованиях пожаробезопасности
          рекомендуется использовать низкотоксичные кабели LTx для монтажа
          силовых линий (ВВГнг-LSLTx) в школах, детских садах и других местах.
          «LTx» — сокращение от английского слова «Low Toxic», что означает
          «низкий уровень токсичности».
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/5/19.jpg"
            objectFit="contain"
            alt="Спортивные учреждения"
          />
        </div>
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <p>
          Основным преимуществом этой системы является тщательный и полный
          контроль лиц. Это делает нормирование, охрану и учет персонала более
          эффективными. Кроме того, СКУД обладает следующими преимуществами:
          <br />
          - значительная экономия денег; <br />
          - круглосуточное функционирование; <br /> - отсутствие влияния
          человека.
        </p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/20.jpeg",
              description: `Контроллеры; Терминалы доступа; Считыватели; Настольные считыватели; Кнопки; Исполнительные устройства; Дополнительные устройства; Турникеты; Домофоны; Досмотровое оборудование.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Dahua",
              image: "/solutions/4/21.jpg",
              description: `Считыватели; Сетевые контроллеры; Домофоны; Аксессуары.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Rubezh",
              image: "/solutions/4/22.jpg",
              description: `Контроллеры; Модули доступа; OSDP-замки; Web-/OSDP-турникеты; Встроенное ПО; Считыватели.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/23.jpg",
              description: `Сетевые контроллеры; Автономные контроллеры; Биометрические считыватели; Терминалы учета рабочего времени; Контроль маршрутов; Домофоны; Идентификаторы; Турникеты; Металлодетекторы; Шлагбаумы; Блокираторы; Электромагнитные замки; Электромеханические замки; Доводчики.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
          ]}
        />
        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Rubezh",
              image: "/solutions/4/24.jpg",
              description: `Центральный прибор индикации и управления;
                Программное обеспечение;   
                Приборы приемно-контрольные управления и индикации;
                Модули сопряжения и связи;
                Извещатели пожарные адресные;
                Оповещатели адресные;
                Расширители адресные;
                Модули управления.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Консэл",
              image: "/solutions/4/26.jpg",
              description: `Газовое пожаротушение; 
                Порошкове пожаротушение; 
                Компактные системы тушения.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Заря",
              image: "/solutions/4/27.jpg",
              description: `Газовое пожаротушение.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/25.jpg",
              description: `
                Приборы приемно-контрольные; 
                Блоки индикации и управления; 
                Устройства передачи данных; 
                Устройства защиты линий; 
                Адресные интерфейсные модули; 
                Блоки питания; 
                Адресные пожарные извещатели; 
                Шкафы автоматики; 
                Шкафы монтажные взрывозащищенное оборудование. 
            `,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
      </>
    ),
  },

  {
    id: "6",
    image: "main.jpg",
    name: "Гостиницы",
    content: (
      <>
        <p>
          Asia Power Operating предлагает комплексные оптимальные
          электротехнические решения с учетом индивидуальных особенностей
          заказчика, конкретного объекта и задач вплоть от проектирования до
          поставки и монтажа электротехнической продукции благодаря своему
          обширному опыту и пониманию специфики электротехнической отрасли.
          Поскольку расходы на электроэнергию являются одной из основных статей
          расходов гостиниц, энергосбережение имеет решающее значение, учитывая,
          что цены на электроэнергию постоянно растут. При планировании
          энергоснабжения отеля необходимо включить систему бесперебойного
          электроснабжения, а также системы общего освещения и аварийного
          освещения. Также следует рассмотреть возможность дальнейшего
          расширения энергосистемы.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/6/1.jpg"
            objectFit="contain"
            alt="Гостиницы"
          />
        </div>
        <p>
          Все больше кaзахстанских компаний обращают внимание на создание
          аварийных систем энергоснабжения при строительстве гостиниц, потому
          что главная задача отеля — создать комфортные и безопасные условия
          пребывания гостей. Надежные источники бесперебойного питания (ИБП),
          производимые Eaton, обеспечивают защиту электрического оборудования от
          множества проблем. Предотвращает повреждения оборудования в результате
          бросков и перепадов напряжения. Обеспечивает доступность сетей и
          других устройств, не позволяя им быть выключенными. Кроме того, ИБП
          могут работать вместе с генераторами, чтобы дать им время для запуска
          в случае отключения питания.
        </p>

        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/6/2.jpg"
            objectFit="contain"
            alt="Гостиницы"
          />
        </div>
        <p>
          <b>Eaton</b>: 5E; 5PX; 5PX GEN2; 9SX; 93PS.
        </p>
        <p>
          <b>Legrand</b>: Keor S; Keor HP; Trimod; Megaline; Keor MOD.
        </p>

        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/6/3.jpg"
            objectFit="contain"
            alt="Гостиницы"
          />
        </div>
        <p>
          Создайте незабываемую атмосферу для каждого клиента, которая
          запомнится им надолго. При использовании решений в области освещения
          вы сократите эксплуатационные расходы и сэкономите на оплате
          электроэнергии. Индивидуальное освещение в номерах, навигация и
          освещение витрин сделают вашу гостиницу незабываемой.
        </p>
        <h3>Светотехническая продукция</h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Световые технологии",
              image: "/solutions/6/4.png",
              description: `BBLLINE; BBLSIDE; CYCLE TRIO P LED; CLASSY; BBL.OVAL; ARMA/P.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "ЭРА",
              image: "/solutions/6/5.jpg",
              description: `Светильник LED Geometria SPO-111; Светильник LED Geometria SPO-121; Светильник LED Geometria SPO-134; Декоративная подсветка WL17; Декоративная подсветка WL28; Декоративная подсветка WL30; Декоративная подсветка OL16; Декоративная подсветка OL15; Декоративная подсветка OL8; Декоративная подсветка OL9; Лента светодиодная LRCOB.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "IN HOME",
              image: "/solutions/6/7.jpg",
              description: `LED-JCDR-VC; LED-ST64; Потолочные светильники серии НПБ; Светильник трековый светодиодный TR-07-TL; Светильник трековый светодиодный TR-GU10-TL; Светильники серии COMFORT.`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "PHILIPS",
              image: "/solutions/6/7.jpg",
              description: `MASTER Value Decorative LED bulbs MASTER LEDspot ExpertColor MV LuxSpace, recessed Ecohome Led Buld Ecofit LEDtube`,
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>Низковольтное оборудование</h3>
        <SolutionCards
          cards={[
            {
              name: "Schneider Electric",
              image: "/solutions/6/8.jpg",
              description: `Acti 9`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Legrand",
              image: "/solutions/6/9.jpg",
              description: `DX3`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Chint",
              image: "/solutions/6/10.jpg",
              description: `NXB-63`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <h3>Электроустановочные изделия</h3>
        <SolutionCards
          cards={[
            {
              name: "Коллекции Legrand",
              image: "/solutions/6/13.png",
              description: `Европейское качество и многофункциональность электроустановочных изделий Legrand прослужат вам многие годы. Дизайн коллекции пропитан французским шармом и каждый элемент внесет свою ноту в общий стиль изысканного интерьера.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Коллекции Schneider Electric",
              image: "/solutions/6/14.jpg",
              description: `Электроустановочные изделия Schneider Electric обеспечат безопасность и комфорт в различных помещениях и благодаря разнообразию форм, цветов и отделок можно выбрать те изделия, которые отразят вашу индивидуальность.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Бюджетные серий для открытой и скрытой установки от бренда EKF",
              image: "/solutions/6/15.jpg",
              description: `В ассортименте EKF представлена серия электроустановочных изделий «Рим» с классом защиты IP20, предназначенная для открытой проводки, она отлично подойдет для установки на стену или потолок, например в загородных гостиницах. В спальнях, гостиных и коридорах городских гостиниц эстетичнее и современнее будут выглядеть розетки и выключатели скрытого монтажа. К примеру, классическая ЭУИ из коллекции «Минск» от EKF, которые легко вписать в любой интерьер.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <SolutionCards
          cards={[
            {
              name: "Rubezh",
              image: "/solutions/6/16.jpg",
              description: `Центральный прибор индикации и управления;
                Программное обеспечение;   
                Приборы приемно-контрольные управления и индикации;
                Модули сопряжения и связи;
                Извещатели пожарные адресные;
                Оповещатели адресные;
                Расширители адресные;
                Модули управления.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: "/solutions/6/17.jpg",
              description: `
                Приборы приемно-контрольные; 
                Блоки индикации и управления; 
                Устройства передачи данных; 
                Устройства защиты линий; 
                Адресные интерфейсные модули; 
                Блоки питания; 
                Адресные пожарные извещатели; 
                Шкафы автоматики; 
                Шкафы монтажные взрывозащищенное оборудование. 
            `,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <h3> Кабельно-проводниковая продукция</h3>
        <SolutionCards
          cards={[
            {
              name: "Низкотоксичные кабели LTx для монтажа силовых линии в гостиничных комплексах",
              image: "/solutions/6/18.jpg",
              description: `ВВГ нг LS LTx; ВВГ нг FRLS LTx.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "	Cистема для прокладки кабеля Legrand кабельный канал",
              image: "/solutions/6/19.jpg",
              description: `DLP; DLP S.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <h3>Структурированные кабельные системы (СКС) </h3>
        <p>
          Основой построeния локальной сети и информационной инфраструктуры
          любой современной компании являются структурированные кабельные
          системы.
        </p>
        <p> Плюcы: </p>
        <p> Единая система для любого типа данных и приложениу;</p>
        <p> Очень высокая надежность, легкость переконфигурации;</p>
        <p> Расширяемость.</p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Legrand",
              image: "/solutions/4/28.png",
              description: `Оптоволоконные кабели; Патч-панели; Кабели SF/UTP; F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в версиях F/UTP; U/UTP; SF/UTP; S/FTP.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ITK",
              image: "/solutions/4/29.jpg",
              description: `LAN-кабель; Разъемы для кабеля; Инструменты и тестеры для кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель интерфейсный огнестойкий RS485; Оптический кабель; Оптические кроссы; Оптические розетки, разъемы и модули Keystone; Оптические адаптеры; Оптические монтажные шнуры; Оптические соединительные шнуры; Оптические переходные шнуры; Оптические кроссы; Оптические кабельные сборки; Оптические шнуры.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE",
              image: "/solutions/4/30.jpg",
              description: `Витая пара: Категория 3; Категория 5; Категория 5e; Категория 6; Категория 6a; Категория 7, 7a, 8; Волоконно-оптический: Внутренний; Внутренний/Внешний; Внешний; Коаксиальный: Тип RG-6; Тип RG-8; Тип RG-11; Тип RG-58; Тип RG-59; Тип Sat703n;`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },

            {
              name: "HPE Aruba",
              image: "/solutions/4/31.jpeg",

              description: `Шлюзы и контроллеры; Виртуальные шлюзы; Внутренние точки доступа; Наружные точки доступа; Стекируемые коммутаторы с облачным управлением.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <h3>Приборы учета электроэнергии Saiman</h3>
        <SolutionCards
          cards={[
            {
              name: "Трехфазные счетчики серии Дала",
              image: "/solutions/5/11.jpg",
              description: `LO;LQ;LP;ES;EY;EP;EZ.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "Однофазные счетчики серии Орман",
              image: "/solutions/5/12.jpg",
              description: `CU;CK;CY;CJ;CI;BL.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <h3>Видеонаблюдение</h3>
        <p>
          Покупая видеонаблюдение от следующих брендов, вы можете создать
          систему безопасности с широким спектром функций, которая удовлетворит
          строгие технические задания и особенности конкретного объекта.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/7.jpeg",
              description: `Сетевые видеокамеры; Аналоговые видеокамеры; Сетевые видеорегистраторы; Цифровые видеорегистраторы; Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/6/11.jpg",
              description: `Сетевые камеры; Камеры HDCVI; PTZ-камеры; Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/9.jpg",
              description: `IP-камеры; IP-камеры с видеоаналитикой; Мультиформатные камеры; Аналоговые HD.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <p>
          Основным преимуществом этой системы является тщательный и полный
          контроль лиц. Это делает нормирование, охрану и учет персонала более
          эффективными. Кроме того, СКУД обладает следующими преимуществами:
          <br />
          - значительная экономия денег; <br />
          - круглосуточное функционирование; <br /> - отсутствие влияния
          человека.
        </p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/20.jpeg",
              description: `Контроллеры; Терминалы доступа; Считыватели; Настольные считыватели; Кнопки; Исполнительные устройства; Дополнительные устройства; Турникеты; Домофоны; Досмотровое оборудование.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Dahua",
              image: "/solutions/4/21.jpg",
              description: `Считыватели; Сетевые контроллеры; Домофоны; Аксессуары.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Rubezh",
              image: "/solutions/6/12.jpg",
              description: `Контроллеры; Модули доступа; OSDP-замки; Web-/OSDP-турникеты; Встроенное ПО; Считыватели.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/23.jpg",
              description: `Сетевые контроллеры; Автономные контроллеры; Биометрические считыватели; Терминалы учета рабочего времени; Контроль маршрутов; Домофоны; Идентификаторы; Турникеты; Металлодетекторы; Шлагбаумы; Блокираторы; Электромагнитные замки; Электромеханические замки; Доводчики.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "7",
    image: "main.jpg",
    name: "Торговые центры",
    content: (
      <>
        <p>
          Разделение помещений торгового центра на следующие зоны осложняет
          проектирование системы электроснабжения: Например, торговая зона
          требует стабильного и бесперебойного электроснабжения для работы
          кассовых аппаратов, освещения и кондиционирования воздуха, чтобы
          покупатели и сотрудники чувствовали себя комфортно.
        </p>
        <p>
          <b>Cкладская зона</b> - Чтобы обеспечить эффективное управление
          запасами и быструю обработку товаров, <b>складская зона</b> требует
          мощных систем электропитания и осветительных систем.
        </p>
        <p>
          <b>Офисная зона</b> - В офисной зоне должны быть надежные источники
          питания для компьютеров, серверов и другой офисной техники, а также
          системы освещения, которые помогут сотрудникам работать эффективнее.
        </p>
        <p>
          <b>Зона фудкорта</b> - Чтобы обеспечить безопасное и
          высококачественное обслуживание посетителей, зона фудкорта требует
          отдельного источника электропитания.
        </p>
        <p>
          <b>Зона внешних сооружений</b> - Зона внешних сооружений включает в
          себя освещение прилегающих территорий, архитектурную подсветку зданий
          и электропитание для наружных рекламных конструкций, что обеспечивает
          привлекательный внешний вид и безопасность в ночное время.
        </p>

        <p>
          <b>Паркинг</b> - В паркинге необходимо иметь не только освещение для
          удобства и безопасности посетителей, но и место для зарядки
          электромобилей, что становится все более важным.
        </p>
        <p>
          <b>Помещения службы безопасности</b> - Бесперебойное электроснабжение
          необходимо для работы камер видеонаблюдения, систем контроля доступа и
          других охранных устройств, обеспечивающих безопасность торгового
          центра.
        </p>
        <p>
          <b>Служебные помещения</b> - Для работы различных инженерных систем,
          таких как отопление, вентиляция и кондиционирование, а также для
          хранения и обслуживания технического оборудования необходимы надежные
          источники питания.
        </p>
        <p>
          Таким образом, при проектировании системы электроснабжения торгового
          центра необходимо учитывать особенности каждой зоны, чтобы обеспечить
          эффективное и надежное электроснабжение.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/7/1.jpg"
            objectFit="contain"
            alt="Торговые центры"
          />
        </div>
        <p>
          Каждая из этих зон будет иметь свои особенности, в зависимости от
          назначения, установленного освещения и электрооборудования. Например,
          для работы электроплит на фудкорте потребуется три фазы питания.
          Однако системы автоматизации склада будут работать только с
          техническим напряжением 380 Вольт, поэтому, как правило, потребуются
          силовые автоматы.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Chint",
              image: "/solutions/7/2.jpg",
              description: `NM1;NXM;NM8N.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Legrand",
              image: "/solutions/7/3.png",
              description: `DRX;DPХЗ.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Schneider electric",
              image: "/solutions/7/4.jpeg",
              description: `Easypact; Acti 9. `,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <h3>Модульные автоматы</h3>
        <SolutionCards
          cards={[
            {
              name: "Chint",
              image: "/solutions/7/5.jpg",
              description: `NXB-63;NXB-125;NB1-63H;`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Legrand",
              image: "/solutions/7/6.jpg",
              description: `RX3;TX3;DX3.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Schneider electric",
              image: "/solutions/7/7.jpeg",
              description: `Easy 9; Acti 9.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <p>
          Хорошее освещение для розничной торговли помогает создать
          привлекательный фирменный стиль, который притягивает клиентов.
          Настраиваемые зоны освещения и яркая подсветка товаров заставят их
          провести у вас больше времени, а динамичное освещение витрины
          привлечет их в магазин. Гибкость и экономичность, необходимые для
          успеха вашего бизнеса, обеспечиваются по-настоящему белым светом и
          простыми средствами управления светодиодными лампами.
        </p>
        <h3>
          Оживите пространство торгового зала с помощью качественного освещения
          Philips!
        </h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Подвесные светильники",
              image: "/solutions/7/8.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Встраиваемые светильники",
              image: "/solutions/7/9.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Накладные светильники",
              image: "/solutions/7/10.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Настенные светильники",
              image: "/solutions/7/11.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Напольные светильники",
              image: "/solutions/7/12.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Даунлайты",
              image: "/solutions/7/13.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Карданные светильники",
              image: "/solutions/7/14.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Трековые светильники",
              image: "/solutions/7/15.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Подвесные светильники для высоких и средних пролетов",
              image: "/solutions/7/16.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Магистральные системы",
              image: "/solutions/7/17.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Реечные и линейные светильники",
              image: "/solutions/7/18.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Пылевлагозащищенные и светильники для чистых помещений",
              image: "/solutions/7/19.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Decorative",
              image: "/solutions/7/20.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Exit Emergency",
              image: "/solutions/7/21.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>
          Создайте потрясающую атмосферу в магазине с помощью Акцентного
          освещения Philips!
        </h3>
        <SolutionCards
          cards={[
            {
              name: "TrueFashion",
              image: "/solutions/7/22.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "Провоцируйте интерес с помощью инновационной технологии линз, обеспечивающей необходимое качество цвета для магазинов модных товаров.",
            },
            {
              name: "GreenSpace Accent",
              image: "/solutions/7/23.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "Создавайте нужное настроение в магазине с помощью полной линейки энергоэффективного светодиодного акцентного освещения.",
            },
            {
              name: "LuxSpace Accent",
              image: "/solutions/7/24.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "Регулируемые точечные светильники освещают модные бутики, супермаркеты и другие магазины, обеспечивая экономию электроэнергии.",
            },
            {
              name: "LuxSpace",
              image: "/solutions/7/25.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "Огромный выбор потолочных светильников позволяет достичь баланса эффективности, комфорта и дизайна.",
            },
            {
              name: "Потолочный светильник GreenSpace",
              image: "/solutions/7/26.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "Сокращение текущих расходов благодаря энергоэффективным потолочным светильникам.",
            },
          ]}
        />
        <SolutionCards
          cards={[
            {
              name: "Световые технологии",
              image: "/solutions/7/27.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "PIPE LED; MATRIX S LED; MATRIX R LED; DL POWER; LED MALL PLUG IN.",
            },
            {
              name: "ЭРА",
              image: "/solutions/7/28.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "Серия JCDR; Серия RED LINE LED; Серия STD LED; Серия SKD; Серия SDL; Серия SPP-402.",
            },
            {
              name: "IN HOME",
              image: "/solutions/7/29.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
              description:
                "LPU-02; LPU-01; LP-02; LP-01; Шинопровод однофазный встраиваемый RC-2B-TL; Светильник трековый под лампу TR-GX53-TL.",
            },
          ]}
        />
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/7/30.jpg"
            objectFit="contain"
            alt="Торговые центры"
          />
        </div>
        <h3>Видеонаблюдение</h3>
        <p>
          Покупая видеонаблюдение от следующих брендов, вы можете создать
          систему безопасности с широким спектром функций, которая удовлетворит
          строгие технические задания и особенности конкретного объекта.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/7.jpeg",
              description: `Сетевые видеокамеры; Аналоговые видеокамеры; Сетевые видеорегистраторы; Цифровые видеорегистраторы; Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/6/11.jpg",
              description: `Сетевые камеры; Камеры HDCVI; PTZ-камеры; Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/9.jpg",
              description: `IP-камеры; IP-камеры с видеоаналитикой; Мультиформатные камеры; Аналоговые HD.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <h3>Приборы учета электроэнергии Saiman</h3>
        <SolutionCards
          cards={[
            {
              name: "Трехфазные счетчики серии Дала",
              image: "/solutions/5/11.jpg",
              description: `LO;LQ;LP;ES;EY;EP;EZ.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "Однофазные счетчики серии Орман",
              image: "/solutions/5/12.jpg",
              description: `CU;CK;CY;CJ;CI;BL.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <h3>Электроустановочные изделия</h3>
        <SolutionCards
          cards={[
            {
              name: "Коллекции Legrand",
              image: "/solutions/6/13.png",
              description: `Европейское качество и многофункциональность электроустановочных изделий Legrand прослужат вам многие годы. Дизайн коллекции пропитан французским шармом и каждый элемент внесет свою ноту в общий стиль изысканного интерьера.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Коллекции Schneider Electric",
              image: "/solutions/6/14.jpg",
              description: `Электроустановочные изделия Schneider Electric обеспечат безопасность и комфорт в различных помещениях и благодаря разнообразию форм, цветов и отделок можно выбрать те изделия, которые отразят вашу индивидуальность.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Бюджетные серий для открытой и скрытой установки от бренда EKF",
              image: "/solutions/6/15.jpg",
              description: `В ассортименте EKF представлена серия электроустановочных изделий «Рим» с классом защиты IP20, предназначенная для открытой проводки, она отлично подойдет для установки на стену или потолок, например в загородных гостиницах. В спальнях, гостиных и коридорах городских гостиниц эстетичнее и современнее будут выглядеть розетки и выключатели скрытого монтажа. К примеру, классическая ЭУИ из коллекции «Минск» от EKF, которые легко вписать в любой интерьер.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/7/31.jpg"
            objectFit="contain"
            alt="Торговые центры"
          />
        </div>
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <p>
          Основным преимуществом этой системы является тщательный и полный
          контроль лиц. Это делает нормирование, охрану и учет персонала более
          эффективными. Кроме того, СКУД обладает следующими преимуществами:
          <br />
          - значительная экономия денег; <br />
          - круглосуточное функционирование; <br /> - отсутствие влияния
          человека.
        </p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/20.jpeg",
              description: `Контроллеры; Терминалы доступа; Считыватели; Настольные считыватели; Кнопки; Исполнительные устройства; Дополнительные устройства; Турникеты; Домофоны; Досмотровое оборудование.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Dahua",
              image: "/solutions/7/32.jpg",
              description: `Считыватели; Сетевые контроллеры; Домофоны; Аксессуары.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Rubezh",
              image: "/solutions/6/12.jpg",
              description: `Контроллеры; Модули доступа; OSDP-замки; Web-/OSDP-турникеты; Встроенное ПО; Считыватели.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Smartec",
              image: "/solutions/7/33.jpg",
              description: `Сетевые контроллеры; Автономные контроллеры; Биометрические считыватели; Терминалы учета рабочего времени; Контроль маршрутов; Домофоны; Идентификаторы; Турникеты; Металлодетекторы; Шлагбаумы; Блокираторы; Электромагнитные замки; Электромеханические замки; Доводчики.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
          ]}
        />
        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <SolutionCards
          cards={[
            {
              name: "Rubezh",
              image: "/solutions/6/16.jpg",
              description: `Центральный прибор индикации и управления;
                Программное обеспечение;   
                Приборы приемно-контрольные управления и индикации;
                Модули сопряжения и связи;
                Извещатели пожарные адресные;
                Оповещатели адресные;
                Расширители адресные;
                Модули управления.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: "/solutions/6/17.jpg",
              description: `
                Приборы приемно-контрольные; 
                Блоки индикации и управления; 
                Устройства передачи данных; 
                Устройства защиты линий; 
                Адресные интерфейсные модули; 
                Блоки питания; 
                Адресные пожарные извещатели; 
                Шкафы автоматики; 
                Шкафы монтажные взрывозащищенное оборудование. 
            `,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <h3> Кабельно- проводниковая продукция</h3>
        <SolutionCards
          cards={[
            {
              name: "Низкотоксичные кабели LTx для монтажа силовых линии в гостиничных комплексах",
              image: "/solutions/6/18.jpg",
              description: `ВВГ нг LS LTx; ВВГ нг FRLS LTx.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "	Cистема для прокладки кабеля Legrand кабельный канал",
              image: "/solutions/6/19.jpg",
              description: `DLP; DLP S.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <h3>Структурированные кабельные системы (СКС) </h3>
        <p>
          Основой построeния локальной сети и информационной инфраструктуры
          любой современной компании являются структурированные кабельные
          системы.
        </p>
        <p> Плюcы: </p>
        <p> Единая система для любого типа данных и приложениу;</p>
        <p> Очень высокая надежность, легкость переконфигурации;</p>
        <p> Расширяемость.</p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Legrand",
              image: "/solutions/4/28.png",
              description: `Оптоволоконные кабели; Патч-панели; Кабели SF/UTP; F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в версиях F/UTP; U/UTP; SF/UTP; S/FTP.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ITK",
              image: "/solutions/4/29.jpg",
              description: `LAN-кабель; Разъемы для кабеля; Инструменты и тестеры для кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель интерфейсный огнестойкий RS485; Оптический кабель; Оптические кроссы; Оптические розетки, разъемы и модули Keystone; Оптические адаптеры; Оптические монтажные шнуры; Оптические соединительные шнуры; Оптические переходные шнуры; Оптические кроссы; Оптические кабельные сборки; Оптические шнуры.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE",
              image: "/solutions/4/30.jpg",
              description: `Витая пара: Категория 3; Категория 5; Категория 5e; Категория 6; Категория 6a; Категория 7, 7a, 8; Волоконно-оптический: Внутренний; Внутренний/Внешний; Внешний; Коаксиальный: Тип RG-6; Тип RG-8; Тип RG-11; Тип RG-58; Тип RG-59; Тип Sat703n;`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },

            {
              name: "HPE Aruba",
              image: "/solutions/4/31.jpeg",

              description: `Шлюзы и контроллеры; Виртуальные шлюзы; Внутренние точки доступа; Наружные точки доступа; Стекируемые коммутаторы с облачным управлением.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "8",
    image: "main.jpg",
    name: "Бизнес центры и Административные здания",
    content: (
      <>
        <p>
          В наши дни каждый современный бизнес-центр оснащен широким спектром
          оргтехники и электрооборудования, без которого работа невозможна.
          Таким образом, система электроснабжения является одной из важнейших
          инженерных связей бизнес-центра. При строительстве и реорганизации
          здания под бизнес-центр необходимо создать систему электроснабжения.
          <br />
          Проектирование, проведенное с учетом всех потенциальных нагрузок в
          электрической сети, является первым и самым важным этапом организации
          электроснабжения бизнес-центра.
        </p>
        <p>
          Мы разработали систему электроснабжения для бизнес-центров и
          административных зданий, которая удовлетворяет следующие потребности:
          <br />
          - круглосуточное бесперебойное электроснабжение; <br /> - обеспечение
          безопасных условий эксплуатации помещений, предотвращение поражения
          электрическим током и возникновения аварийных ситуаций; <br /> -
          предотвращение преждевременного выхода из строя дорогостоящей
          оргтехники и другого электрооборудования; <br />- организация
          наружного электроснабжения для бизнес-центров и административных
          зданий; <br /> - обеспечение бесперебойного
        </p>
        <p>
          Новые методы оптимизации офисного пространства, энергосбережения и
          эффективной эксплуатации необходимы современным бизнес-центрам и
          административным зданиям. Светодиодные офисные светильники от «Asia
          Power Operating» улучшают энергоэффективность бизнес-центров и снижают
          энергопотребление. Установите умные системы освещения, чтобы сделать
          офис светлым и просторным в любое время. Переход на управляемую
          систему светодиодного освещения позволяет сэкономить до 80%.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/8/1.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <h3>
          Светодиодные светильники для бизнес центров и административных зданий
          от PHILIPS
        </h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "PowerBalance RC360B",
              image: "/solutions/8/2.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "SlimBlend Square",
              image: "/solutions/8/3.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "CoreLine Downlight",
              image: "/solutions/8/4.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "TrueLine, встраиваемый",
              image: "/solutions/8/5.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "GreenSpace Accent Projector",
              image: "/solutions/8/6.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "StyliD",
              image: "/solutions/8/7.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "CoreLine Panel",
              image: "/solutions/8/8.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "CoreLine Recessed",
              image: "/solutions/8/9.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "CoreLine Surface-mounted",
              image: "/solutions/8/10.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "LuxSpace, recessed",
              image: "/solutions/8/11.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "CoreLine Recessed Spot",
              image: "/solutions/8/12.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "Светодиодный софит Essential Smartbright",
              image: "/solutions/8/13.png",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3>Световые технологии</h3>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "PERFECT LED",
              image: "/solutions/8/14.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "PIXED LED",
              image: "/solutions/8/15.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "UGR DL PREMIUM",
              image: "/solutions/8/16.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "STANDSOL LED",
              image: "/solutions/8/17.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "SPACE LED DREAM",
              image: "/solutions/8/18.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "PROFILE 60L LED",
              image: "/solutions/8/19.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "PROFILE 60H LED",
              image: "/solutions/8/20.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
            {
              name: "OREOL LINE FLD/P",
              image: "/solutions/8/21.jpg",
              link: `${PATHS.catalog}/${Category.LightingProducts}`,
            },
          ]}
        />
        <h3> Источник бесперебойного питания от Legrand</h3>
        <p>
          В настоящее время Legrand предлагает решения для распределения
          электроэнергии, в частности одно- и трехфазные ИБП.
          Электроустановочные изделия для управления и контроля включают
          средства домашней автоматизации и датчики присутствия и движения.
          Устройства для прокладки кабеля и организация рабочих мест являются
          третьим направлением. Кроме того, решения для информационных сетей,
          такие как коммуникационные шкафы и структурированные кабельные
          системы, являются одним из наиболее перспективных направлений ее
          деятельности.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/8/22.png"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <p>
          <b>Выберите свой ИБП Legrand </b>
          <br />- Правильный выбор ИБП позволяет сэкономить бюджет и сделать
          инфраструктуру более эффективной. <br />- Предлагаемый модельный ряд
          ИБП Legrand имеет широкий модельный ряд мощностью 0,5 до 120 кВА,
          выделяется своими инновационными технологиями и 100% надежностью.
          <br />- Версии с двойным преобразованием частоты обеспечивают подачу
          питания, свободную от помех. <br />
          Линейно-интерактивные ИБП обеспечивают высокую производительность как
          для гражданского применения так и для небольших коммерческих объектов.
        </p>
        <p>
          <b>Основные серии:</b> Keor S; Keor HP; Trimod; Megaline; Keor MOD.
        </p>
        <h3>Управление и Контроль</h3>
        <p>
          Набор дополнительных опций и программного обеспечения для комплексного
          мониторинга и управления ИБП 24/7, 365 дней в году для обеспечения
          непрерывной работы Вашего бизнеса.
        </p>
        <h3>Экономия электроэнергии</h3>
        <p>
          - ИБП Eaton гарантируют эффективную экономию энергии. Высокая
          производительность снижает потребление энергии при одинаковой
          нагрузке, что положительно влияет на окружающую среду. <br />-
          Благодаря превосходным характеристикам современных ИБП Eaton можно
          достичь КПД до 95 % (в экономичном режиме до 99 %) и максимально
          экономить электроэнергию и деньги.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/8/23.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <p>
          <b>Основные серии Eaton</b>:5E; 5PX; 5PX GEN2; 9SX; 93PS; BladeUPC;
          Ellipse ECO; Ellipse PRO.
        </p>
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/8/24.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <h3>Автоматы и их комплектующие</h3>
        <SolutionCards
          cards={[
            {
              name: "Legrand",
              image: "/solutions/8/25.jpg",
              description: `RX3; TX3; CX3; CTX3.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "Schneider Electric",
              image: "/solutions/8/26.jpeg",
              description: `Acti 9; Resi 9; Easypact; Tesys.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
            {
              name: "EKF",
              image: "/solutions/8/27.jpg",
              description: `Averes; Proxima.`,
              link: `${PATHS.catalog}/${Category.LowVoltageEquipment}`,
            },
          ]}
        />
        <h3>Приборы учета электроэнергии Saiman</h3>
        <p className="font-bold">
          Мы имеем возможность на территории Казахстана в максимально короткие
          сроки с учетом пожеланий заказчика предоставить приборы учета и
          электроэнергии отечественной марки «SAIMAN».
        </p>
        <SolutionCards
          cards={[
            {
              name: "Трехфазные счетчики серии Дала",
              image: "/solutions/5/11.jpg",
              description: `LO;LQ;LP;ES;EY;EP;EZ.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
            {
              name: "Однофазные счетчики серии Орман",
              image: "/solutions/5/12.jpg",
              description: `CU;CK;CY;CJ;CI;BL.`,
              link: `${PATHS.catalog}/${Category.MeteringAndControlDevices}`,
            },
          ]}
        />
        <h3>Электроустановочные изделия</h3>
        <SolutionCards
          cards={[
            {
              name: "Коллекции Legrand",
              image: "/solutions/8/28.jpeg",
              description: `Niloe; Plexo; Mosaic; Выдвижные блоки и лючки.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "Коллекции Schneider Electric",
              image: "/solutions/8/29.jpeg",
              description: `Asfora.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
            {
              name: "EKF",
              image: "/solutions/8/30.jpeg",
              description: `Минск; Мурманск.`,
              link: `${PATHS.catalog}/${Category.ElectricalInstallationProducts}`,
            },
          ]}
        />
        <h3>Видеонаблюдение</h3>
        <p>
          Покупая видеонаблюдение от следующих брендов, вы можете создать
          систему безопасности с широким спектром функций, которая удовлетворит
          строгие технические задания и особенности конкретного объекта.
        </p>
        <SolutionCards
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/7.jpeg",
              description: `Сетевые видеокамеры; Аналоговые видеокамеры; Сетевые видеорегистраторы; Цифровые видеорегистраторы; Видеостены и мониторы.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Dahua",
              image: "/solutions/6/11.jpg",
              description: `Сетевые камеры; Камеры HDCVI; PTZ-камеры; Тепловизорные камеры.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
            {
              name: "Smartec",
              image: "/solutions/4/9.jpg",
              description: `IP-камеры; IP-камеры с видеоаналитикой; Мультиформатные камеры; Аналоговые HD.`,
              link: `${PATHS.catalog}/${Category.VideoSurveillance}`,
            },
          ]}
        />
        <h3>Система контроля и управления доступом (СКУД)</h3>
        <p>
          Основным преимуществом этой системы является тщательный и полный
          контроль лиц. Это делает нормирование, охрану и учет персонала более
          эффективными. Кроме того, СКУД обладает следующими преимуществами:
          <br />
          - значительная экономия денег; <br />
          - круглосуточное функционирование; <br /> - отсутствие влияния
          человека.
        </p>
        <SolutionCards
          cols={4}
          cards={[
            {
              name: "Hikvision",
              image: "/solutions/4/20.jpeg",
              description: `Контроллеры; Терминалы доступа; Считыватели; Настольные считыватели; Кнопки; Исполнительные устройства; Дополнительные устройства; Турникеты; Домофоны; Досмотровое оборудование.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Dahua",
              image: "/solutions/7/32.jpg",
              description: `Считыватели; Сетевые контроллеры; Домофоны; Аксессуары.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Rubezh",
              image: "/solutions/6/12.jpg",
              description: `Контроллеры; Модули доступа; OSDP-замки; Web-/OSDP-турникеты; Встроенное ПО; Считыватели.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
            {
              name: "Smartec",
              image: "/solutions/7/33.jpg",
              description: `Сетевые контроллеры; Автономные контроллеры; Биометрические считыватели; Терминалы учета рабочего времени; Контроль маршрутов; Домофоны; Идентификаторы; Турникеты; Металлодетекторы; Шлагбаумы; Блокираторы; Электромагнитные замки; Электромеханические замки; Доводчики.`,
              link: `${PATHS.catalog}/${Category.AccessControlAndManagementSystem}`,
            },
          ]}
        />
        <h3>Автоматическая пожарная сигнализация (АПС)</h3>
        <p>
          Преимущества использования этой системы безопасности включают
          следующие:
        </p>
        <p>
          - децентрализованная система — каждый ее компонент может продолжать
          функционировать независимо от повреждений сети или ремонтных работ.
        </p>
        <p>- повышение скорости;</p>
        <p>- масштабируемость — защита любых размеров объектов; </p>
        <p>- управление противопожарной автоматикой.</p>
        <SolutionCards
          cards={[
            {
              name: "Rubezh",
              image: "/solutions/6/16.jpg",
              description: `Центральный прибор индикации и управления;
                Программное обеспечение;   
                Приборы приемно-контрольные управления и индикации;
                Модули сопряжения и связи;
                Извещатели пожарные адресные;
                Оповещатели адресные;
                Расширители адресные;
                Модули управления.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Smartec",
              image: "/solutions/6/17.jpg",
              description: `
                Приборы приемно-контрольные; 
                Блоки индикации и управления; 
                Устройства передачи данных; 
                Устройства защиты линий; 
                Адресные интерфейсные модули; 
                Блоки питания; 
                Адресные пожарные извещатели; 
                Шкафы автоматики; 
                Шкафы монтажные взрывозащищенное оборудование. 
            `,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <SolutionCards
          cards={[
            {
              name: "Консэл",
              image: "/solutions/4/26.jpg",
              description: `Газовое пожаротушение; 
                Порошкове пожаротушение; 
                Компактные системы тушения.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Заря",
              image: "/solutions/4/27.jpg",
              description: `Газовое пожаротушение.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
            {
              name: "Император",
              image: "/solutions/8/34.jpg",
              description: `Газовое пожаротушение.`,
              link: `${PATHS.catalog}/${Category.AutomaticFireAlarm}`,
            },
          ]}
        />
        <h3> Кабельно- проводниковая продукция</h3>
        <SolutionCards
          cards={[
            {
              name: "Низкотоксичные кабели LTx для монтажа силовых линии в гостиничных комплексах",
              image: "/solutions/6/18.jpg",
              description: `ВВГ нг LS LTx; ВВГ нг FRLS LTx.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "	Cистема для прокладки кабеля Legrand кабельный канал",
              image: "/solutions/6/19.jpg",
              description: `DLP; DLP S.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
        <div className="relative w-full h-[400px] md:h-[500px] ">
          <Image
            fill
            src="/solutions/8/35.jpg"
            objectFit="contain"
            alt="Проект электроснабжения жилых комплексов"
          />
        </div>
        <h3>Структурированные кабельные системы (СКС) </h3>
        <SolutionCards
          cards={[
            {
              name: "Legrand",
              image: "/solutions/4/28.png",
              description: `Оптоволоконные кабели; Патч-панели; Кабели SF/UTP; F/UTP; U/UTP; F/FTP; U/FTP; S/FTP; Прямые патч-корды RJ 45/RJ 45 в версиях F/UTP; U/UTP; SF/UTP; S/FTP.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ITK",
              image: "/solutions/4/29.jpg",
              description: `LAN-кабель; LAN-кабель GREEN; Разъемы для кабеля; Инструменты и тестеры для кабеля; Инструменты; Тестеры; Монтажные аксессуары; Кабель огнестойкий; Кабель интерфейсный; Кабель интерфейсный RS485; Кабель интерфейсный огнестойкий RS485.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "HYPERLINE Витая пара:",
              image: "/solutions/4/30.jpg",
              description: `категория 3; категория 5; категория 5E; категория 6; категория 6A; категория 7, 7A, 8; Волоконно-оптический: внутренний; внутренний/внешний; внешний;`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },

            {
              name: "HPE Aruba",
              image: "/solutions/4/31.jpeg",

              description: `Шлюзы и контроллеры; Виртуальные шлюзы; Внутренние точки доступа; Наружные точки доступа; Стекируемые коммутаторы с облачным управлением.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
            {
              name: "ИЭК",
              image: "/solutions/4/32.jpg",

              description: `Лотки металлические листовые; Лотки металлические лестничные; Лотки металлические проволочные.`,
              link: `${PATHS.catalog}/${Category.CableAndWireProducts}`,
            },
          ]}
        />
      </>
    ),
  },
];
