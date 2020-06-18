![title](https://user-images.githubusercontent.com/46894554/83957388-27daae80-a8a3-11ea-8022-7d67756361b4.png)
# simulation

![introduce](https://user-images.githubusercontent.com/46894554/84999342-fd82ce00-b18b-11ea-9329-ad480a52287b.png)

[View](https://SteelEyebrows.github.io/HW_interrupt_simulation/)

___
# description

- 일반인에게 하드웨어 인터럽트 과정을 쉽게 알려주는 것을 목표로 제작하였습니다. 
- 모던 웹 프레임워크인 React를 사용하여 시각화하였습니다. 

## 용어설명 및 구성요소들의 역할
### APIC
APIC(Advanced Programmable Interrut Controller)는 인터럽트를 더 섬세하게 관리할 수 있는 인터럽트 컨트롤러입니다. 컴퓨터분야가 발전함에 따라 새로운 주변장치들이 개발되면서 처리해야할 인터럽트들의 종류가 많아졌고, IRQ충돌 문제가 많아졌습니다. 때문에 기존의 PIC에서 더 향상된 Advanced PIC가 만들어지게 되었습니다.

### CPU
인터럽트는 CPU의 작업 중에 일어납니다. CPU는 하나의 작업만 할 수 있기 때문에 현재 진행중인 작업을 일시적으로 중단하고, 요청된 인터럽트를 수행합니다.

### Process context
현재 프로세스의 진행상태를 나타냅니다. 다음 실행할 명령어의 주소인 PC와 각종 레지스터들이 가리키는 값 같은 CPU의 수행상태를 나타내며, ‘code,data,stack에 어떤 내용이 들어있는 가?‘ 같은 프로세스의 주소공간에 대한 정보를 나타냅니다.

### PC
PC(Program Counter) 중앙처리장치에 위치한 레지스터 중 하나이며, 다음에 실행될 명령어의 주소를 가지고 있어 실행할 기계어 코드의 위치를 저장합니다.

### PCB
PCB(Process Control Block)는 프로세스의 상태 정보를 저장하는 구조체이며, 프로세스가 생성될 때마다 고유의 PCB가 생성되고, 프로세스가 완료되면 PCB는 제거됩니다. PCB는 커널 주소공간의 data영역에 존재합니다.

## 인터럽트 과정 설명
① 외부장치에 인터럽트가 발생하고, APIC에게 인터럽트를 보냅니다.

② APIC는 CPU에게 인터럽트발생을 알립니다.

③ 진행중이던 프로세스를 끝낸 CPU는 인터럽트 발생을 확인하고, IEflag가 1이라면 확인 신호(INTA)를 보냅니다.

④ CPU는 다른 인터럽트를 받지않게 IEflag를 0으로 바꿉니다.

⑤ APIC는 INTA를 확인한뒤, IRR중 우선순위가 가장 높은 장치를 선정하고, 해당비트를 ISR에 set합니다.

⑥ APIC는 IRQ number를 내부적으로 base값을 더하여 data bus를 통해 CPU에 전달합니다.

⑦ PCB에 복귀주소(PC)와 현재 CPU의 레지스터에 저장되어 있는 실행 중이던 프로세스의 문맥을 저장합니다.(Context-Saving) 

⑧ IRQ number활용하여, IDT를 참조해서 ISR주소를 찾아냅니다.

⑨ ISR값을 PC에 저장하여 CPU가 인터럽트를 처리할 수 있게 합니다.

⑩ 커널에 프로그래밍된 ISR의 코드를 읽어가며 작업을 수행합니다.

⑪ 인터럽트 작업이 끝나면 PCB에 저장된 context를 복구하고 PC값을 바꿔줍니다.

## 코딩

- 객체지향적인 방식 대신 함수적 방식(React hooks)을 사용하여 컴포넌트들을 작성하였습니다, 
- 인터럽트의 모든 단계는 손쉬운 수정과 가독성을 위해 JSON구조와 유사한 자바스크립트의 객체 표기법으로 정리했습니다.
- 시각적인 효과를 높이기 위해 작동하는 요소들에 하이라이트 효과를 주었습니다

## 소스파일 설명

![구조도](https://user-images.githubusercontent.com/46894554/84382295-64046b00-ac25-11ea-9340-df96bf0e9092.png)

|소스|설명|
|--|------|
|./public |이미지 파일을 저장하는 폴더입니다.|
|./src |웹페이지를 구성하는 기본적인 코드들을 모아둔 폴더입니다.|
|./src/App.js |가장 상위에 있는 컴포넌트이며, 모든 페이지가 공통적으로 사용하는 요소(설정 버튼, 페이지설명, 페이지 번호, 다음버튼, 이전버튼 등)를 정의합니다. |
|./src/App.css |모든 페이지가 공통적으로 사용하는 디자인요소들을 정리한 css파일입니다. 이번 과제에는 폰트관련 디자인만 정의합니다.|
|./src/_allState.js |인터럽트 작동순서, 설명 등 인터럽트의 종합적인 데이터를 정의합니다. Object형식으로 이루어 져있으며 총 11단계로 구분하고 있습니다. |
|./src/fonts|ttf파일을 모아둔 폴더입니다.|
|./src/comp/Card.js|인터럽트에 상관된 요소의 이름과 어떤 동작을 하고 있는지 나타냅니다. |
|./src/comp/IDT_dialog.js|true값이 입력되면, IDT테이블을 다이얼로그 방식으로 팝업합니다.|
|./src/comp/interruptRequest.js|인터럽트를 처리하는 과정을 시각화하여 보여주는 페이지입니다. |
|./src/comp/selectInterrupt.js|웹페이지에 가장 먼저 보이는 화면이며, 16개의 하드웨어 인터럽트 중 하나의 케이스를 선택하는 페이지입니다. true값을 전달받으면 팝업됩니다.  |
|./src/comp/setMask.js|특정 인터럽트 신호를 무시하는 mask를 설정하는 다이얼로그를 팝업합니다. true값을 전달받으면 팝업됩니다.  |
|./src/comp/setPriority.js|한가지 이상의 인터럽트가 요청되었을 때, 요청받은 인터럽트 중 어떤 것을 먼저 실행할 지에 대한 기준이 되는 우선순위를 설정하는 다이얼로그를 팝업합니다. true값을 전달받으면 팝업됩니다.   |
|./src/comp/SettingMenu.js|인터럽트 핸들러를 세팅하는 메뉴를 드랍다운합니다. 우선순위 설정, 마스크 설정, 인터럽트 추가 관련 다이얼로그를 팝업하는 버튼으로 구성되어 있습니다. |

## 주요변수

※변수명이 A/B 형식으로 되어있는 변수는 A는 데이터변수, B는 A를 업데이트 해주는 함수라고 생각해주시면 됩니다. 

예를 들어, B(4) 라는 입력을 받으면 A는 4로 업데이트 됩니다.

|변수|type|설명|
|--|--|------|
|count/setCount|Number|현재 인터럽트 단계를 나타내는 변수입니다. 예를들어, count++ 은 다음단계로 넘어갑니다. 우측하단에 위치한 네비게이터를 통해 확인할 수 있습니다. |
|interrupt/setInterrupt|Array|요청받은 인터럽트의 pin번호를 나타내는 변수입니다. 인터럽트 요청이 들어오면 push 됩니다.APIC에 있는 IRR을 통해 확인할 수 있습니다.|
|interruptDialog/setInterruptDialog|Boolean|인터럽트 요청 다이얼로그의 상태를 나타내는 변수입니다. 만약 이 변수가 true값이라면 다이얼로그가 팝업됩니다.|
|working/setWorking|Number|현재 처리중인 인터럽트의 pin번호를 나타내는 변수입니다. APIC에 있는 ISR을 통해 확인할 수 있습니다.|
|mask/setMask|Array|mask처리된 pin번호를 저장하는 배열입니다. mask 처리된 pin은, 인터럽트 요청 다이얼로그에서 disabled 처리되어 클릭할 수 없게 됩니다.|
|MaskDialog/setMaskDialog|Boolean|mask 설정 다이얼로그의 상태를 나타내는 변수입니다. 만약 이 변수가 true값이라면 마스크를 설정할 수 있는 다이얼로그가 팝업 됩니다.|
|priority/setPriority|Array|인터럽트 우선순위를 나타내는 배열입니다. 만약 다수의 인터럽트가 동시에 요청되면 이 배열을 참조해 우선순위가 높은 인터럽트부터 선출합니다.|
|PriorityDialog/setPriorityDialog|Boolean|우선순위 설정 다이얼로그의 상태를 나타내는 변수입니다. 만약 이 변수가 true값이라면 우선순위를 설정할 수 있는 다이얼로그가 팝업 됩니다.|
|states|Array|‘allStates.js’에서 전달받은 배열을 저장하는 변수입니다.|

## 사용 라이브러리
