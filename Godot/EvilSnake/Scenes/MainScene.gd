extends Node2D

const APPLE = 0
const SNAKE = 1
const EVIL = 2
var apple_pos
var evil_apple_pos
var snake_body = [Vector2(5,5), Vector2(4,5), Vector2(3,5)]
var evil_body = [Vector2(5,14), Vector2(4,14), Vector2(3,14)]
var snake_direction = Vector2(1, 0)
var add_apple = false
var add_evil_apple = false
var dir_change = false

func _ready():
	apple_pos = place_apple()
	evil_apple_pos = place_evil_apple()
	draw_apple()
	draw_evil_apple()
	draw_snake()
	draw_evil_snake()

func place_apple():
	randomize()
	var x = randi() % 9 + 1
	var y = randi() % 7 + 2
	return Vector2(x, y)

func place_evil_apple():
	randomize()
	var x = randi() % 9 + 1
	var y = randi() % 7 + 11
	return Vector2(x, y)

func draw_apple():
	$Snake.set_cell(apple_pos.x, apple_pos.y, APPLE)
	
func draw_evil_apple():
	$Snake.set_cell(evil_apple_pos.x, evil_apple_pos.y, APPLE)

func draw_snake():
	for i in snake_body.size():
		var block = snake_body[i]
		
		if i == 0:
			var head_dir = relation2(snake_body[0], snake_body[1])
			if head_dir == 'top':
				$Snake.set_cell(block.x, block.y, SNAKE, false, true, true, Vector2(0,0))
			if head_dir == 'bottom':
				$Snake.set_cell(block.x, block.y, SNAKE, false, false, true, Vector2(0,0))
			if head_dir == 'left':
				$Snake.set_cell(block.x, block.y, SNAKE, true, false, false, Vector2(0,0))
			if head_dir == 'right':
				$Snake.set_cell(block.x, block.y, SNAKE, false, false, false, Vector2(0,0))
		elif i == snake_body.size() - 1:
			var tail_dir = relation2(snake_body[-1], snake_body[-2])
			if tail_dir == 'top':
				$Snake.set_cell(block.x, block.y, SNAKE, false, false, true, Vector2(4,0))
			if tail_dir == 'bottom':
				$Snake.set_cell(block.x, block.y, SNAKE, false, true, true, Vector2(4,0))
			if tail_dir == 'left':
				$Snake.set_cell(block.x, block.y, SNAKE, false, false, false, Vector2(4,0))
			if tail_dir == 'right':
				$Snake.set_cell(block.x, block.y, SNAKE, true, false, false, Vector2(4,0))
		else:
			var prev = snake_body[i+1] - block
			var next = snake_body[i-1] - block
			
			if prev.x == next.x:
				if prev.y > next.y:
					$Snake.set_cell(block.x, block.y, SNAKE, true, true, true, Vector2(3,0))
				if prev.y < next.y:
					$Snake.set_cell(block.x, block.y, SNAKE, true, false, true, Vector2(3,0))
			if prev.y == next.y:
				if prev.x > next.x:
					$Snake.set_cell(block.x, block.y, SNAKE, false, false, false, Vector2(3,0))
				if prev.x < next.x:
					$Snake.set_cell(block.x, block.y, SNAKE, false, true, false, Vector2(3,0))
			else:
				#   ^
				# o o
				if prev.x == -1 and next.y == -1:
					$Snake.set_cell(block.x, block.y, SNAKE, false, true, false, Vector2(1,0))
				#   o
				# < o
				if prev.y == -1 and next.x == -1:
					$Snake.set_cell(block.x, block.y, SNAKE, true, false, true, Vector2(1,0))
				# o o								< o
				#   v								  o
				if prev.x == -1 and next.y == 1 or prev.y == 1 and next.x == -1:
					$Snake.set_cell(block.x, block.y, SNAKE, false, false, false, Vector2(1,0))
				# o									^
				# o >								o o
				if prev.y == -1 and next.x == 1 or prev.x == 1 and next.y == -1:
					$Snake.set_cell(block.x, block.y, SNAKE, false, false, true, Vector2(1,0))
				# o o
				# v
				if prev.x == 1 and next.y == 1:
					$Snake.set_cell(block.x, block.y, SNAKE, false, true, true, Vector2(1,0))
				# o >
				# o
				if prev.y == 1 and next.x == 1:
					$Snake.set_cell(block.x, block.y, SNAKE, true, false, false, Vector2(1,0))

func draw_evil_snake():
	for i in evil_body.size():
		var block = evil_body[i]
		
		if i == 0:
			var head_dir = relation2(evil_body[0], evil_body[1])
			if head_dir == 'top':
				$Snake.set_cell(block.x, block.y, EVIL, false, true, true, Vector2(0,0))
			if head_dir == 'bottom':
				$Snake.set_cell(block.x, block.y, EVIL, false, false, true, Vector2(0,0))
			if head_dir == 'left':
				$Snake.set_cell(block.x, block.y, EVIL, true, false, false, Vector2(0,0))
			if head_dir == 'right':
				$Snake.set_cell(block.x, block.y, EVIL, false, false, false, Vector2(0,0))
		elif i == evil_body.size() - 1:
			var tail_dir = relation2(evil_body[-1], evil_body[-2])
			if tail_dir == 'top':
				$Snake.set_cell(block.x, block.y, EVIL, false, false, true, Vector2(4,0))
			if tail_dir == 'bottom':
				$Snake.set_cell(block.x, block.y, EVIL, false, true, true, Vector2(4,0))
			if tail_dir == 'left':
				$Snake.set_cell(block.x, block.y, EVIL, false, false, false, Vector2(4,0))
			if tail_dir == 'right':
				$Snake.set_cell(block.x, block.y, EVIL, true, false, false, Vector2(4,0))
		else:
			var prev = evil_body[i+1] - block
			var next = evil_body[i-1] - block
			
			if prev.x == next.x:
				if prev.y > next.y:
					$Snake.set_cell(block.x, block.y, EVIL, true, true, true, Vector2(3,0))
				if prev.y < next.y:
					$Snake.set_cell(block.x, block.y, EVIL, true, false, true, Vector2(3,0))
			if prev.y == next.y:
				if prev.x > next.x:
					$Snake.set_cell(block.x, block.y, EVIL, false, false, false, Vector2(3,0))
				if prev.x < next.x:
					$Snake.set_cell(block.x, block.y, EVIL, false, true, false, Vector2(3,0))
			else:
				#   ^
				# o o
				if prev.x == -1 and next.y == -1:
					$Snake.set_cell(block.x, block.y, EVIL, false, true, false, Vector2(1,0))
				#   o
				# < o
				if prev.y == -1 and next.x == -1:
					$Snake.set_cell(block.x, block.y, EVIL, true, false, true, Vector2(1,0))
				# o o								< o
				#   v								  o
				if prev.x == -1 and next.y == 1 or prev.y == 1 and next.x == -1:
					$Snake.set_cell(block.x, block.y, EVIL, false, false, false, Vector2(1,0))
				# o									^
				# o >								o o
				if prev.y == -1 and next.x == 1 or prev.x == 1 and next.y == -1:
					$Snake.set_cell(block.x, block.y, EVIL, false, false, true, Vector2(1,0))
				# o o
				# v
				if prev.x == 1 and next.y == 1:
					$Snake.set_cell(block.x, block.y, EVIL, false, true, true, Vector2(1,0))
				# o >
				# o
				if prev.y == 1 and next.x == 1:
					$Snake.set_cell(block.x, block.y, EVIL, true, false, false, Vector2(1,0))

func relation2(first_block:Vector2, second_block:Vector2):
	var block_relation = second_block - first_block
	if block_relation == Vector2(0,-1): return 'top'
	if block_relation == Vector2(0,1): return 'bottom'
	if block_relation == Vector2(-1,0): return 'left'
	if block_relation == Vector2(1,0): return 'right'

func move_snake():
	if add_apple:
		delete_tiles(SNAKE)
		var body_copy = snake_body.slice(0, snake_body.size() - 1)
		var new_head = body_copy[0] + snake_direction
		body_copy.insert(0, new_head)
		snake_body = body_copy
		add_apple = false
	else:
		delete_tiles(SNAKE)
		var body_copy = snake_body.slice(0, snake_body.size() - 2)
		var new_head = body_copy[0] + snake_direction
		body_copy.insert(0, new_head)
		snake_body = body_copy

func move_evil_snake():
	if add_evil_apple:
		delete_tiles(EVIL)
		var evil_copy = evil_body.slice(0, evil_body.size() - 1)
		var new_evil_head = evil_copy[0] + snake_direction
		evil_copy.insert(0, new_evil_head)
		evil_body = evil_copy
		add_evil_apple = false
	else:
		delete_tiles(EVIL)
		var evil_copy = evil_body.slice(0, evil_body.size() - 2)
		var new_evil_head = evil_copy[0] + snake_direction
		evil_copy.insert(0, new_evil_head)
		evil_body = evil_copy

func delete_tiles(id:int):
	var cells = $Snake.get_used_cells_by_id(id)
	for cell in cells:
		$Snake.set_cell(cell.x, cell.y, -1)

#func _input(event):
#	if dir_change == false:
#		if Input.is_action_just_pressed("ui_up"): 
#			if not snake_direction == Vector2(0,1):
#				snake_direction = Vector2(0,-1)
#		if Input.is_action_just_pressed("ui_down"):
#			if not snake_direction == Vector2(0,-1):
#				snake_direction = Vector2(0,1)
#		if Input.is_action_just_pressed("ui_left"):
#			if not snake_direction == Vector2(1,0):
#				snake_direction = Vector2(-1,0)
#		if Input.is_action_just_pressed("ui_right"):
#			if not snake_direction == Vector2(-1,0):
#				snake_direction = Vector2(1,0)
#		dir_change = true

func movement(direction):
	if dir_change == false:
		if direction == Vector2(0,1):
			if not snake_direction == Vector2(0,1):
					snake_direction = Vector2(0,-1)
		elif direction == Vector2(0,-1):
			if not snake_direction == Vector2(0,-1):
					snake_direction = Vector2(0,1)
		elif direction == Vector2(1,0):
			if not snake_direction == Vector2(1,0):
					snake_direction = Vector2(-1,0)
		elif direction == Vector2(-1,0):
			if not snake_direction == Vector2(-1,0):
					snake_direction = Vector2(1,0)
		dir_change = true


func check_apple_eaten():
	if apple_pos == snake_body[0]:
		apple_pos = place_apple()
		add_apple = true
		get_tree().call_group('ScoreGroup', 'update_score', snake_body.size())

func check_evil_apple_eaten():
	if evil_apple_pos == evil_body[0]:
		evil_apple_pos = place_evil_apple()
		add_evil_apple = true

func check_game_over():
	var head = snake_body[0]
	var evil_head = evil_body[0]
	
	# snake crashes into wall
	if head.x > 9 or head.x < 1 or head.y > 8 or head.y < 2:
		reset()
	
	if evil_head.x > 9 or evil_head.x < 1 or evil_head.y > 17 or evil_head.y < 11:
		reset()
	
	# snake crashes into self
	for block in snake_body.slice(1, snake_body.size() - 1):
		if block == head:
			reset()
	
	for block in evil_body.slice(1, evil_body.size() - 1):
		if block == evil_head:
			reset()

func reset():
	snake_body = [Vector2(5,5), Vector2(4,5), Vector2(3,5)]
	evil_body = [Vector2(5,14), Vector2(4,14), Vector2(3,14)]
	snake_direction = Vector2(1,0)

func _on_SnakeTick_timeout():
	move_snake()
	move_evil_snake()
	draw_apple()
	draw_evil_apple()
	draw_snake()
	draw_evil_snake()
	dir_change = false
	check_apple_eaten()
	check_evil_apple_eaten()

func _process(delta):
	check_game_over()
	if apple_pos in snake_body:
		apple_pos = place_apple()
	if evil_apple_pos in evil_body:
		evil_apple_pos = place_evil_apple()


func _on_Pause_pressed():
	$Pause2.visible = true


func _on_Pause2_Continue():
	$Pause2.visible = false


func _on_SwipeDetector_swiped(direction):
	movement(direction)
