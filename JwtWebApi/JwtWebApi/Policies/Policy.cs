using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JwtWebApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace JwtWebApi.Policies
{
    public static class Policy
    {
        public const string admin = "Admin";
        public const string user = "User";

        public static AuthorizationPolicy AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(admin).Build();
        }

        public static AuthorizationPolicy UserPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(user).Build();
        }
    }
}
