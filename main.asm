
             INCLUDE 'mc9s12c32.inc'

; export symbols
            XDEF Entry, main
            ; we use export 'Entry' as symbol. This allows us to
            ; reference 'Entry' either in the linker .prm file
            ; or from C/C++ later on

            XREF __SEG_END_SSTACK      ; symbol defined by the linker for the end of the stack


            XDEF Entry, _Startup, main
            ; we use export 'Entry' as symbol. This allows us to
            ; reference 'Entry' either in the linker .prm file
            ; or from C/C++ later on
           
; code section
MyCode:     SECTION
main:
_Startup:
Entry:
   lds #__SEG_END_SSTACK
   BIT0: EQU %00000001                         
   BIT1: EQU %00000010
   BIT2: EQU %00000100
   BIT3: EQU %00001000
   BIT4: EQU %00010000
   BIT5: EQU %00100000
   BIT6: EQU %01000000
   BIT7: EQU %10000000
   bset ATDDIEN,BIT0|BIT1|BIT2|BIT3|BIT4|BIT5|BIT6|BIT7
   bset DDRB,BIT0|BIT1|BIT2|BIT3|BIT4|BIT5|BIT6|BIT7
   bset DDRA,BIT0|BIT1|BIT2|BIT3|BIT4|BIT5|BIT6|BIT7
   ;uppercase
   LIGHTA: EQU %00001000
   LIGHTB: EQU %00000011
   LIGHTC: EQU %01000110
   LIGHTD: EQU %00100001
   ;lowercase
   LIGHTa: EQU %00100000
   LIGHTb: EQU %00000000
   LIGHTc: EQU %00100111
   LIGHTd: EQU %01000000
   LIGHTDash: EQU %0111111
   LIGHTTie: EQU %0000111
   LIGHTWinner: EQU %1010101
   LIGHTLoser: EQU %1000111
   main_loop:
      ;ifLightA:
      bclr ATDDIEN,BIT1|BIT2|BIT3|BIT4|BIT6|BIT7
      brset PORTAD0,BIT2|BIT3|BIT4|BIT5|BIT6|BIT7,tie
      
      brset PORTAD0,BIT0|BIT1|BIT4|BIT5|BIT6|BIT7,tie
                                
      brset PORTAD0,BIT0|BIT1|BIT2|BIT3|BIT6|BIT7,tie
      ;ROCK1 VS 
      brset PORTAD0,BIT1|BIT3|BIT4|BIT5|BIT6|BIT7,p2winner ;Rock 1 vs Paper 2
      brset PORTAD0,BIT1|BIT2|BIT3|BIT4|BIT6|BIT7,p1winner ;Rock 1 vs Scissor2
      ;PAPER1 vs
      brset PORTAD0,BIT1|BIT3|BIT4|BIT5|BIT6|BIT7,p1winner ;Paper 1 vs Rock 2
      brset PORTAD0,BIT1|BIT3|BIT4|BIT5|BIT6|BIT7,p2winner ;Paper 1 vs Scissor2 
      ;SCISSOR1 VS
      brset PORTAD0,BIT1|BIT3|BIT4|BIT5|BIT6|BIT7,p1winner ;Scissor 1 vs Paper2
      brset PORTAD0,BIT1|BIT3|BIT4|BIT5|BIT6|BIT7,p2winner ;Scissor 1 vs Rock 2
      
      lbra standby
      
      p2winner:
      
      
      
      
      
      p1winner:
      
      
      
      
      
     
      
   
      
      standby:
      brset PTAD,BIT6,goto_main
      
      lbra main_loop
      goto_main:
      lbra main_loop
      
      tie:
      ;iftie:
      
      bset PORTB,LIGHTTie     
      bset PORTA,LIGHTTie
      lbra standby
      
      shortDelay:
        ldx $ff
      shortDelay2:
        nop
        dex
        cpx #0
        bhi shortDelay2
        rtc
;*****************END***************;