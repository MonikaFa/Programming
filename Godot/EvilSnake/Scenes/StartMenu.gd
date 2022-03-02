extends Node2D

func _ready():
	pass

func _on_Button_Play_pressed():
	get_tree().change_scene("res://Scenes/MainScene.tscn")


func _on_Button_LevelSelection_pressed():
	get_tree().change_scene("res://Scenes/LevelSelection.tscn")
