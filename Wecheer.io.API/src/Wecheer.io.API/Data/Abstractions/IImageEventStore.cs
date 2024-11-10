using Wecheer.io.API.Models;

namespace Wecheer.io.API.Data;

public interface IImageEventStore
{
    void Add(ImageEvent @event);
    ImageEvent? GetLastEvent();
    int GetLastHourCount();
}