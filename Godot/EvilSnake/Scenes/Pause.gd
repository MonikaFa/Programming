extends Node2D

signal Continue

func _ready():
	pass

func _on_Home_pressed():
	get_tree().change_scene("res://Scenes/StartMenu.tscn")


func _on_Continue_pressed():
	emit_signal("Continue")
