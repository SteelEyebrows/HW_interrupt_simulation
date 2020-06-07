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
