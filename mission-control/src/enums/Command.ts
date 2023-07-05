type CommandName = "Up" | "Down" | "Right" | "Left" | "GoBack" | "StartRecording" | "Land" | "Exit" | "Invalid"

export class Command {
  static Up: Command = new Command("Up")
  static Down: Command = new Command("Down")
  static Right: Command = new Command("Right")
  static Left: Command = new Command("Left")
  static GoBack: Command = new Command("GoBack")
  static Land: Command = new Command("Land")
  static StartRecording: Command = new Command("StartRecording")
  static Exit: Command = new Command("Exit")

  static Invalid: Command = new Command("Invalid")

  private readonly _representation: string

  private constructor(public readonly commandName: CommandName) {
    this._representation = commandName
  }

  static fromInput(input: string): Command {
    switch (input) {
      case "z":
        return Command.Up
      case "s":
        return Command.Down
      case "d":
        return Command.Right
      case "q":
        return Command.Left
      case "a":
        return Command.StartRecording
      case "e":
      case "\u0003":
        return Command.Exit
      default:
        return Command.Invalid
    }
  }

  toString(): string {
    return this._representation
  }
}
