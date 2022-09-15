using orange.Application.Common.Interfaces;
using System;

namespace orange.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
