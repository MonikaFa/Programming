extends Node2D

signal swiped(direction)
signal swiped_cancelled(startPosition)
export(float, 1.0, 1.5) var MAX_DIAGONAL_SLOPE = 1.3

onready var timer = $Timer
var swipeStartPosition: Vector2 = Vector2()

func _input(event):
	if not event is InputEventScreenTouch:
		return

	if event.is_pressed():
		_start_detection(event.position)
	elif not timer.is_stopped():
		_end_detection(event.position)


func _start_detection(position):
	swipeStartPosition = position
	print("Start Position: " + str(position))
	timer.start()


func _end_detection(position):
	timer.stop()

	var direction = (position - swipeStartPosition).normalized()

	if abs(direction.x) + abs(direction.y) >= MAX_DIAGONAL_SLOPE:
		emit_signal("swiped", Vector2(-sign(direction.x), 0.0))
	else:
		emit_signal("swiped", Vector2(0.0, -sign(direction.y)))
	print("End Position: " + str(position))

func _on_Timer_timeout():
	emit_signal("swiped_cancelled", swipeStartPosition)
