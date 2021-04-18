import { Social as SocialType, SkillGroup as SkillGroupType, PortfolioGroup as PortfolioGroupType, History as HistoryType } from '../domain';
import { Social } from './social';
import { SkillGroup } from './skill';
import { PortfolioGroup } from './portfolio';
import { History } from './history';

type Config = {
  socials: Readonly<SocialType[]>;
  skillGroups: Readonly<SkillGroupType[]>;
  portfolioGroups: Readonly<PortfolioGroupType[]>;
  histories: Readonly<HistoryType[]>;
};

const config: Config = {
  socials: Object.values(Social),
  skillGroups: Object.values(SkillGroup),
  portfolioGroups: Object.values(PortfolioGroup),
  histories: Object.values(History),
};

export default config;
