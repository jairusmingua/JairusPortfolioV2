         INCLUDE 'mc9s12c32.inc'
         INCLUDE 'bits.inc'


 
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
   bset ATDDIEN,BIT0|BIT1|BIT2|BIT3
   bset PTT,BIT0|BIT1|BIT2|BIT3|BIT4|BIT5|BIT6|BIT7
   bclr DDRAD,BIT4|BIT5|BIT6|BIT7
   bset DDRB,BIT0|BIT1|BIT2|BIT3|BIT4|BIT5|BIT6|BIT7
   bset DDRA,BIT0|BIT1|BIT2|BIT3|BIT4|BIT5|BIT6|BIT7
   TEN: EQU %10000000; Timer enable
   TOF: EQU %10000000; Timer overflowflag
   DELAY: EQU 100
   MAXSCORE: EQU 4
   bset TSCR1,TEN
   ldaa #TOF
   staa TFLG2
   main_loop:
      
         
      
      brset PTAD,BIT0,paper
      rvr:
      brset PTT,128,rvp
      lbra main_loop
      rvp:
      brset PTT,210,rvs
      lbra p2winner
      rvs:
      
      lbra p1winner
      
      rout:
      lbra main_loop
     
      paper:
      brset PTAD,BIT1,scissor
      pvr:
      brset PTT,128,pvs
      lbra p1winner
      pvp:
      brset PTT,210,pvp
      lbra main_loop
      pvs:
      lbra p2winner
      pout:
      lbra main_loop
      
      scissor:
      brset PTAD,BIT2,main_loop
      svr:
      brset PTT,128,svp
      lbra p2winner
      svp:
      brset PTT,210,svs
      lbra p1winner
      svs:
      lbra main_loop
      
      
                            
      
      p2winner:
      
      inc PORTB
      brset PORTB,#MAXSCORE,resetGame  
      ;ldx #DELAY
      ;jsr shortDelay
      ;lbra tie
      lbra standby
     
     
     
     
      p1winner:
     
      inc PORTA
      brset PORTB,#MAXSCORE,resetGame
      ;ldx #DELAY
      ;jsr shortDelay
      lbra standby
     
     
     
     
     
   
     
      standby:
      
      brset PTAD,BIT4,goto_main         
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