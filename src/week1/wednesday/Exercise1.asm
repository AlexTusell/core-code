.data
	number1: .asciiz "\nEnter your first number: "
	number2: .asciiz "\nEnter your second number: "
	result_message: .asciiz "\nThe result is: "
.text
	main:
		li $v0, 4
		la $a0, number1
		syscall
		
		li $v0, 5
		syscall
		
		move $t0, $v0
		
		li $v0, 4
		la $a0, number2
		syscall

  		li $v0, 5
		syscall

		move $t1, $v0

		add $t2, $t0, $t1

		li $v0, 4
		la $a0 result_message
		syscall

		li $v0, 1
		move $a0, $t2
		syscall
		
		li $v0, 10
		syscall