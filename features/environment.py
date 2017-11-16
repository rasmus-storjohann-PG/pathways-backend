from django.db import transaction

def before_scenario(context, _):
    context.atomic = transaction.Atomic(savepoint=True, using='default')
    context.atomic.__enter__()
    context._savepoint = transaction.savepoint()

def after_scenario(context, _):
    transaction.savepoint_rollback(context._savepoint)
    context.atomic.__exit__(None, None, None)
