export function ALL_STATE_VALS(nums){
  return([
    { id: 0, 
      title:"인터럽트 발생!", 
      disc: "외부장치가 APIC에게 인터럽트를 보냅니다",
      apic:"→인터럽트",
      cpu:"-"
    },
      { id: 1, 
        title:"인터럽트 발생!", 
        disc: "외부장치가 APIC에게 인터럽트를 보냅니다",
        apic:"→인터럽트",
        cpu:"-"
      },
      { id: 2, 
        title:"인터럽트 요청검사", 
        disc: "인터럽트를 받은 APIC는 CPU에게 INTR(Interrupt Request)을 보냅니다.",
        apic:"INTR→",
        cpu:"→INTR"
      },
      { id: 3, 
        title:"인터럽트 요청검사", 
        disc: "진행중이던 사이클을 끝낸 후 INTR을 확인하고, INTR이 있다면 인터럽트 단계를 시작합니다.",
        apic:"-",
        cpu:"INTR Check!"
      },
      { id: 4, 
        title:"인터럽트 단계", 
        disc: "APIC에게 INTA(Interrupt Acknowledge)를 보냅니다.",
        apic:"INTA←",
        cpu:"←INTA"
      },
      { id: 5, 
        title:"인터럽트 단계", 
        disc: "APIC은 INTA를 확인하고 인터럽트 벡터를 CPU에게 보냅니다",
        apic:"인터럽트 벡터→",
        cpu:"→인터럽트 벡터"
      },
      { 
        id: 6, 
        title:"인터럽트 단계", 
        disc: "인터럽트 서비스 루틴 실행을 위한 준비 시작" ,
        process:{psw:'#data'},
        pc:'#address',
        pcb:{pc:'54',pcb:'54'}
      },
      { 
        id: 7, 
        title:"인터럽트 단계", 
        disc: "PCB에 복귀주소(PC)와 현재 CPU의 레지스터에 저장되어 있는 실행중이던 프로세스의 정보를 저장" ,
        process:{psw:'#data'},
        pc:'#address',
        pcb:{pc:'#address',psw:'#data'}
      },
      { 
        id: 8, 
        title:"인터럽트 단계", 
        disc: "인터럽트 벡터를 참조하여 인터럽트벡터테이블에서 ISR위치를 찾는다." ,
        process:{psw:'-'},
        pc:'-',
        pcb:{pc:'#address',psw:'#data'}
      },
      { 
        id: 9, 
        title:"인터럽트 단계", 
        disc: "PC에 ISR위치 입력" ,
        process:{psw:'-'},
        pc:`#${nums}`,
        pcb:{pc:'#address',psw:'#data'}
      },
      { id: 10, 
        title:"인터럽트 서비스 루틴", 
        disc: "ISR실행" ,
        process:{psw:`#${nums}`,},
        pc:'-',
        pcb:{pc:'#address',psw:'#data'}
      },
      { id: 11,
        title:"인터럽트 리턴", 
        disc: "PSW와 PC가 복구됨" ,
        process:{psw:'#data'},
        pc:'#address',
        pcb:{pc:'-',psw:'-'}
      },
      { id: 12, 
        title:"인터럽트 리턴", 
        disc: "복귀" ,
        process:{psw:'#data'},
        pc:'#address',
        pcb:{pc:'-',psw:'-'}
      },
    ]);
  }