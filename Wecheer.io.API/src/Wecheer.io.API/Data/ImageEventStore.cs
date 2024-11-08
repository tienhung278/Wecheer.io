using Wecheer.io.API.Models;

namespace Wecheer.io.API.Data;

public class ImageEventStore : IImageEventStore
{
    private static readonly List<ImageEvent> _events = new List<ImageEvent>();

    public void Add(ImageEvent @event)
    {
        _events.Add(@event);
    }

    public ImageEvent GetLastEvent()
    {
        return _events.LastOrDefault();
    }

    public int GetLastHourCount()
    {
        var now = DateTime.UtcNow;
        return _events.Count(e => e.Timestamp >= now.AddHours(-1));
    }
}