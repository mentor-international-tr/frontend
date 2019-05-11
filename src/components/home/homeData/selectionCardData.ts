interface MISelectionCardProps {
  description: string;
  extraInfo?: string;
  iconClassName: string;
}

class MISelectionCard {
  description: string;
  extraInfo?: string;
  iconClassName: string;
  constructor({
    description,
    extraInfo,
    iconClassName,
  }: MISelectionCardProps) {
    this.description = description;
    this.extraInfo = extraInfo;
    this.iconClassName = iconClassName;
  }
}

export default [
  new MISelectionCard({
    description: "I'm a teacher",
    extraInfo: "Mentor, trainer, coordinator, etc.",
    iconClassName: "fas fa-chalkboard-teacher",
  }),
  new MISelectionCard({
    description: "I'm a client",
    extraInfo: "Student, learner, beneficiary, etc.",
    iconClassName: "fas fa-user",
  }),
  new MISelectionCard({
    description: "I'm a country manager",
    iconClassName: "",
  }),
  new MISelectionCard({
    description: "I'm a board member",
    iconClassName: "",
  }),
];
