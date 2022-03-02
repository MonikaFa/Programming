extends Node2D

func _on_Level1_pressed():
	get_tree().change_scene("res://Scenes/MainScene.tscn")


func _on_Home_pressed():
	get_tree().change_scene("res://Scenes/StartMenu.tscn")
