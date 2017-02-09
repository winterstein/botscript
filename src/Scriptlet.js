

onStart(done(output))

onDone

onFail

oninput

onFocus

onBlur (losing focus to a non-child/descendant)

onOutput (ie your output has been emitted)

Only output: another scriptlet

parents do not get called unless the child explicitly does with 
 -- except for done, fail

actions:
start()
done()
fail()
input()
partialInput()
focus()
blur() -> release focus, the runner then decides who to give focus to
