using orange.Domain.Common;
using System.Threading.Tasks;

namespace orange.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
