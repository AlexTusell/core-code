.data
	name: .asciiz "\nEnter your Name: "
	input: .space 100
	result_message: .asciiz "\nHello, "
	sing: .asciiz "!"
.text
	main:
		li $v0, 4
		la $a0, name
		syscall
		
		li $v0, 8
		la $a0, input
		li $a1, 100
		syscall

		li $v0, 4
		la $a0 result_message
		syscall

		li $v0, 4
		la $a0, input
		syscall	
		
		li $v0, 10
		syscall