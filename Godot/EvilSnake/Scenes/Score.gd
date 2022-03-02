extends Node2D

func _ready():
	$Apple.position = Vector2(330, 44)
	$ScoreText.rect_position = Vector2(360, 25)

func update_score(snake_length):
	$ScoreText.text = str(snake_length - 2)

func _draw():
	var score_width = $Apple.get_rect().size.x + $ScoreText.get_rect().size.x - 28
