![title](https://user-images.githubusercontent.com/46894554/83957388-27daae80-a8a3-11ea-8022-7d67756361b4.png)
# simulation

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

② 인터럽트를 받은 APIC는 인터럽트 처리를 부탁하기 위해 CPU에게 INTR(Interrupt Request)을 보냅니다.

③ CPU는 instruction Cycle을 마칠 때 마다 INTR의 여부를 확인하며, INTR이 있는 경우 인터럽트 처리를 위한 준비를 시작합니다.

④ APIC에게 INTR에 대한 응답으로 INTA(Interrupt Acknowledge)를 보냅니다.

⑤ APIC은 INTA를 확인하고 자신과 연결되어 있는 데이터 버스에 인터럽트 서비스 루틴의 주소 (8-bit) 를 실어 주어 CPU에게 전달해줍니다. 

⑥ CPU는 데이터버스에 실린 내용을 읽어서 interrupt type number 를 결정합니다.

⑦ PCB에 복귀주소(PC)와 현재 CPU의 레지스터에 저장되어 있는 실행 중이던 프로세스의 정보(PSW)를 저장합니다.(Context-Saving)

⑧ interrupt type number 참조하여 인터럽트 벡터 테이블에서 ISR위치를 찾습니다.

⑨ PC에 ISR의 위치를 입력합니다.

⑩ ISR을 실행합니다.

⑪ PSW와 PC가 복구됩니다.

⑫ 이전 작업이 복구됩니다.

## 코딩
- 객체지향적인 방식 대신 함수적 방식(React hooks)을 사용하여 컴포넌트들을 작성하였습니다, 
- 인터럽트의 모든 단계는 손쉬운 수정과 가독성을 위해 JSON구조와 유사한 자바스크립트의 객체 표기법으로 정리했습니다.
- 시각적인 효과를 높이기 위해 작동하는 요소들에 하이라이트 효과를 주었습니다
