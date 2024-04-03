namespace RoundDawn.Server.Components.Layout
{
    class NavMenuItem
    {
        public required string TopName { get; set; }
        public required List<string> SubItemNames { get; set; }
    }

    public partial class NavMenu
    {
        private readonly List<NavMenuItem> _menuItems = [
            new NavMenuItem { TopName = "Home", SubItemNames = [] },
            new NavMenuItem { TopName = "Pfadfinden", SubItemNames = [] },
            new NavMenuItem { TopName = "Der Stamm", SubItemNames = ["Heim", "Geschichte", "Ansprechpartner"] },
            new NavMenuItem { TopName = "Gruppen", SubItemNames = [] },
            new NavMenuItem { TopName = "Förderverein", SubItemNames = [] },
            new NavMenuItem { TopName = "Padsöker", SubItemNames = [] },
            ];
    }
}
