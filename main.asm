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
   
   ;timer
   ;TCNT: EQU $0044 ; Timer counter register
;   TSCR1: EQU $0046 ;Timer system control register 1
   TEN: EQU %10000000; Timer enable
;   TFLG2: EQU $004F ;Timer interrupt flag resgister 2
   TOF: EQU %10000000; Timer overflowflag
   DELAY: EQU 100
   MAXSCORE: EQU 3
   bset TSCR1,TEN
   ldaa #TOF
   staa TFLG2
   main_loop:
      ;ifLightA:
      ;bclr ATDDIEN,BIT0|BIT3|BIT4|BIT5|BIT6|BIT7
     
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
     
      brset PORTAD0,BIT0|BIT4|BIT5|BIT6|BIT7,p2winner   ;;;sample
      lbra main_loop
     
      p2winner:
      
      inc PORTB
      brset PORTB,#MAXSCORE,resetGame  
      ;ldx #DELAY
      ;jsr shortDelay
      lbra tie
     
     
     
     
     
      p1winner:
     
      inc PORTA
      brset PORTB,#MAXSCORE,resetGame
      ;ldx #DELAY
      ;jsr shortDelay
     
     
     
     
     
     
   
     
      standby:
      
      brset PORTAD0,BIT0|BIT4|BIT5|BIT6|BIT7,goto_main
      lbra standby
      resetGame:
      brset PORTAD0,BIT1|BIT4|BIT5|BIT6|BIT7,reset
      lbra resetGame
      reset:
      clr PORTA
      clr PORTB
      goto_main:
      ldx #DELAY
      jsr shortDelay
      lbra main_loop
     
      tie:
      lbra standby
      
     
 MySub: SECTION
  shortDelay:
        psha
        pshx
        spin:
            tst TFLG2
            bpl spin
            ldaa #TOF
            staa TFLG2
            dex
            bne spin
            pulx
            pula
            rts
;*****************END***************;