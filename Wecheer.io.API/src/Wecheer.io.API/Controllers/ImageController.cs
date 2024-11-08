using Microsoft.AspNetCore.Mvc;
using Wecheer.io.API.Data;
using Wecheer.io.API.Models;

namespace Wecheer.io.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController : Controller
{
    private readonly ILogger _logger;
    private readonly IImageEventStore _imageEventStore;

    public ImageController(ILogger<ImageController> logger, IImageEventStore imageEventStore)
    {
        _logger = logger;
        _imageEventStore = imageEventStore;
    }

    [HttpPost]
    public IActionResult HandleImageEvent(ImageEvent @event)
    {
        _logger.LogInformation($"Received image event: {@event.ImageUrl} - {@event.Description}");
        _imageEventStore.Add(@event);

        return Ok();
    }
    
    [HttpGet]
    public IActionResult GetLastImage()
    {
        return Ok(new { image = _imageEventStore.GetLastEvent(), lastHourCount = _imageEventStore.GetLastHourCount() });
    }
}