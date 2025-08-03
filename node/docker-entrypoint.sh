#!/bin/sh

# Wait for the database to be ready
dockerize -wait tcp://db:3306 -timeout 20s

# Execute the main command
exec "$@"
