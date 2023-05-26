Hooks.on('renderTemplate', async (app, html, data) => {
    if (app.template.includes('template_actor')) {
      // Get the roll dice button element
      const rollDiceButton = html.find('#rollDiceButton');
  
      // Add a click event handler to the roll dice button
      rollDiceButton.on('click', async () => {
        // Render the pop-up dialog
        const dialogHtml = await renderDiceRollDialog();
        Dialog.prompt({
          title: 'Roll Dice',
          content: dialogHtml,
          callback: async (result) => {
            if (result) {
              // Retrieve the selected values from the dialog
              const selectedAttribute = html.find('#attributeDropdown').val();
              const hasRelevantSkill = html.find('#relevantSkillToggle').prop('checked');
              const relevantAttribute = html.find('#relevantAttributeDropdown').val();
              const oppositionLevel = html.find('#oppositionLevelDropdown').val();
  
              // Perform the dice roll with the selected values
              const diceRollResult = rollDice(selectedAttribute, hasRelevantSkill, relevantAttribute, oppositionLevel);
  
              // Display the dice roll result
              console.log('Dice Roll Result:', diceRollResult);
            }
          }
        });
      });
    }
  });
  
  async function renderDiceRollDialog() {
    // Retrieve the template for the pop-up dialog from a separate HTML file
    const dialogHtml = await fetch('/systems/your-system/templates/dice_roll_dialog.html')
      .then(response => response.text())
      .catch(err => {
        console.error('Error loading dice_roll_dialog.html:', err);
        return '';
      });
  
    return dialogHtml;
  }
  