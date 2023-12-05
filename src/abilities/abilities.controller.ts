import { Controller } from '@nestjs/common';

import { AbilitiesService } from './abilities.service';

@Controller('abilities')
export class AbilitiesController {
  constructor(private readonly abilitiesService: AbilitiesService) {}
}
