import pygame
import sys

pygame.init()
pygame.display.set_caption("Arcade")
screen = pygame.display.set_mode((432, 768))
clock = pygame.time.Clock()
game_font = pygame.font.Font("assets/ferrum.otf", 40)

bg_surface = pygame.image.load("assets/background-blue.png").convert()
bg_surface = pygame.transform.scale(bg_surface, (432, 768))

floor_surface = pygame.image.load("assets/base.png").convert()
floor_surface = pygame.transform.scale(floor_surface, (432, 100))

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.blit(bg_surface, (0, 0))
    screen.blit(floor_surface, (0, 675))

    pygame.display.update()
    clock.tick(120)

